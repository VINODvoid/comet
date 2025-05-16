"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  BookmarkIcon,
  Search,
  PlusCircle,
  Grid2X2,
  ListFilter,
  User,
  Settings,
  LogOut,
  Bookmark,
  Heart,
  Star,
  Code,
  Coffee,
  Film,
  Music,
  BookOpen,
  Trash2,
} from "lucide-react"
import { ModeToggle } from "@/components/mode-toggle"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { useNavigate } from "react-router-dom"
import type { Bookmark as BookmarkType, Collection } from "../lib/types"
import { DeleteConfirmation } from "@/components/delete-confirmation"

// Dummy data for bookmarks
const initialBookmarks: BookmarkType[] = [
  {
    id: 1,
    title: "How to Build a Next.js App with TypeScript",
    url: "https://example.com/nextjs-typescript",
    description: "A comprehensive guide to setting up and building a Next.js application with TypeScript.",
    tags: ["nextjs", "typescript", "react"],
    favicon: "https://nextjs.org/favicon.ico",
    collection: "Development",
    icon: <Code className="h-4 w-4" />,
  },
  {
    id: 2,
    title: "10 Coffee Brewing Methods You Should Try",
    url: "https://example.com/coffee-brewing",
    description: "Explore different coffee brewing methods from pour-over to French press and find your favorite.",
    tags: ["coffee", "brewing", "guide"],
    favicon: "/placeholder.svg?height=16&width=16",
    collection: "Coffee",
    icon: <Coffee className="h-4 w-4" />,
  },
  {
    id: 3,
    title: "The Best Movies of 2024 So Far",
    url: "https://example.com/movies-2024",
    description: "A curated list of the best films released in 2024 that you shouldn't miss.",
    tags: ["movies", "entertainment", "2024"],
    favicon: "/placeholder.svg?height=16&width=16",
    collection: "Entertainment",
    icon: <Film className="h-4 w-4" />,
  },
  {
    id: 4,
    title: "Introduction to Web Accessibility",
    url: "https://example.com/web-accessibility",
    description: "Learn the basics of web accessibility and how to make your websites more inclusive.",
    tags: ["accessibility", "web", "a11y"],
    favicon: "/placeholder.svg?height=16&width=16",
    collection: "Development",
    icon: <Code className="h-4 w-4" />,
  },
  {
    id: 5,
    title: "Top 10 Albums of All Time",
    url: "https://example.com/top-albums",
    description: "A subjective list of the greatest music albums ever recorded across all genres.",
    tags: ["music", "albums", "ranking"],
    favicon: "/placeholder.svg?height=16&width=16",
    collection: "Music",
    icon: <Music className="h-4 w-4" />,
  },
  {
    id: 6,
    title: "The Art of Productive Reading",
    url: "https://example.com/productive-reading",
    description: "Strategies and techniques to get more out of your reading time and retain information better.",
    tags: ["reading", "productivity", "learning"],
    favicon: "/placeholder.svg?height=16&width=16",
    collection: "Books",
    icon: <BookOpen className="h-4 w-4" />,
  },
]

// Dummy data for collections
const collections: Collection[] = [
  { id: 1, name: "Development", count: 24, icon: <Code className="h-4 w-4" /> },
  { id: 2, name: "Coffee", count: 8, icon: <Coffee className="h-4 w-4" /> },
  { id: 3, name: "Entertainment", count: 15, icon: <Film className="h-4 w-4" /> },
  { id: 4, name: "Music", count: 12, icon: <Music className="h-4 w-4" /> },
  { id: 5, name: "Books", count: 9, icon: <BookOpen className="h-4 w-4" /> },
  { id: 6, name: "Favorites", count: 7, icon: <Heart className="h-4 w-4" /> },
]

export default function DashboardPage() {
  const [view, setView] = useState<"grid" | "list">("grid")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCollection, setSelectedCollection] = useState<number | null>(null)
  const [bookmarks, setBookmarks] = useState<BookmarkType[]>(initialBookmarks)
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [bookmarkToDelete, setBookmarkToDelete] = useState<number | null>(null)
  const navigate = useNavigate()

  const handleDeleteBookmark = (id: number) => {
    setBookmarkToDelete(id)
    setDeleteDialogOpen(true)
  }

  const confirmDelete = () => {
    if (bookmarkToDelete !== null) {
      setBookmarks((prevBookmarks) => prevBookmarks.filter((bookmark) => bookmark.id !== bookmarkToDelete))
      setBookmarkToDelete(null)
    }
    setDeleteDialogOpen(false)
  }

  const filteredBookmarks = bookmarks.filter((bookmark) => {
    const matchesSearch =
      bookmark.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      bookmark.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      bookmark.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

    const matchesCollection = selectedCollection
      ? collections.find((c) => c.id === selectedCollection)?.name === bookmark.collection
      : true

    return matchesSearch && matchesCollection
  })

  const handleLogout = () => {
    // Simulate logout
    navigate("/")
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <BookmarkIcon className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">Comet</span>
          </div>
          <div className="flex-1 mx-4 md:mx-8 lg:mx-16">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search bookmarks..."
                className="w-full pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="icon">
              <PlusCircle className="h-5 w-5" />
              <span className="sr-only">Add bookmark</span>
            </Button>
            <ModeToggle />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
      <div className="flex flex-1">
        <aside className="hidden md:flex w-64 flex-col border-r p-4">
          <div className="mb-4">
            <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">Collections</h2>
            <div className="space-y-1">
              <Button
                variant={selectedCollection === null ? "secondary" : "ghost"}
                className="w-full justify-start"
                onClick={() => setSelectedCollection(null)}
              >
                <Bookmark className="mr-2 h-4 w-4" />
                All Bookmarks
              </Button>
              {collections.map((collection) => (
                <Button
                  key={collection.id}
                  variant={selectedCollection === collection.id ? "secondary" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setSelectedCollection(collection.id)}
                >
                  {collection.icon}
                  <span className="ml-2">{collection.name}</span>
                  <Badge variant="outline" className="ml-auto">
                    {collection.count}
                  </Badge>
                </Button>
              ))}
            </div>
          </div>
          <div className="mt-auto">
            <Button variant="outline" className="w-full">
              <PlusCircle className="mr-2 h-4 w-4" />
              New Collection
            </Button>
          </div>
        </aside>
        <main className="flex-1 p-4 md:p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold">
              {selectedCollection ? collections.find((c) => c.id === selectedCollection)?.name : "All Bookmarks"}
            </h1>
            <div className="flex items-center gap-2">
              <Button variant={view === "grid" ? "secondary" : "ghost"} size="icon" onClick={() => setView("grid")}>
                <Grid2X2 className="h-4 w-4" />
                <span className="sr-only">Grid view</span>
              </Button>
              <Button variant={view === "list" ? "secondary" : "ghost"} size="icon" onClick={() => setView("list")}>
                <ListFilter className="h-4 w-4" />
                <span className="sr-only">List view</span>
              </Button>
            </div>
          </div>

          {view === "grid" ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filteredBookmarks.map((bookmark) => (
                <Card key={bookmark.id} className="overflow-hidden">
                  <CardHeader className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-6 w-6 rounded-full bg-muted flex items-center justify-center overflow-hidden">
                          <img
                            src={bookmark.favicon || "/placeholder.svg"}
                            alt=""
                            className="h-4 w-4"
                            onError={(e) => {
                              ;(e.target as HTMLImageElement).src = "/placeholder.svg?height=16&width=16"
                            }}
                          />
                        </div>
                        <CardTitle className="text-base">{bookmark.title}</CardTitle>
                      </div>
                      <div className="flex gap-1">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Star className="h-4 w-4" />
                          <span className="sr-only">Favorite</span>
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-destructive hover:text-destructive"
                          onClick={() => handleDeleteBookmark(bookmark.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">Delete</span>
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <CardDescription className="line-clamp-2">{bookmark.description}</CardDescription>
                  </CardContent>
                  <CardFooter className="p-4 pt-0 flex flex-wrap gap-2">
                    {bookmark.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="space-y-2">
              {filteredBookmarks.map((bookmark) => (
                <div key={bookmark.id} className="flex items-start gap-4 p-4 rounded-lg border">
                  <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center overflow-hidden">
                    <img
                      src={bookmark.favicon || "/placeholder.svg"}
                      alt=""
                      className="h-6 w-6"
                      onError={(e) => {
                        ;(e.target as HTMLImageElement).src = "/placeholder.svg?height=16&width=16"
                      }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <h3 className="font-medium">{bookmark.title}</h3>
                      <div className="flex gap-1">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Star className="h-4 w-4" />
                          <span className="sr-only">Favorite</span>
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-destructive hover:text-destructive"
                          onClick={() => handleDeleteBookmark(bookmark.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">Delete</span>
                        </Button>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-1">{bookmark.description}</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {bookmark.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
      <DeleteConfirmation
        isOpen={deleteDialogOpen}
        onClose={() => setDeleteDialogOpen(false)}
        onConfirm={confirmDelete}
        title="Delete Bookmark"
        description="Are you sure you want to delete this bookmark? This action cannot be undone."
      />
    </div>
  )
}
