"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  MapPin,
  Calendar,
  Users,
  Star,
  Mountain,
  Heart,
  Search,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  ChevronLeft,
  ChevronRight,
  Quote,
  Play,
  Snowflake,
  Sun,
  Leaf,
  Award,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const heroSlides = [
  {
    image: "Stunning Dal Lake with houseboats at golden hour, mountains in background",
    title: "Discover the Paradise",
    subtitle: "of Kashmir",
    description: "Experience the breathtaking beauty, rich culture, and warm hospitality of Kashmir Valley",
    cta: "Plan Your Journey",
    gradient: "from-purple-900/80 via-blue-900/60 to-emerald-900/80",
  },
  {
    image: "Snow-covered Gulmarg ski slopes with cable car and pine trees",
    title: "Adventure Awaits",
    subtitle: "in Gulmarg",
    description: "World-class skiing and breathtaking alpine adventures in the heart of Kashmir",
    cta: "Book Ski Trip",
    gradient: "from-blue-900/80 via-indigo-900/60 to-cyan-900/80",
  },
  {
    image: "Pahalgam valley with green meadows, flowing river and snow peaks",
    title: "Serenity Found",
    subtitle: "in Pahalgam",
    description: "Pristine valleys perfect for trekking, relaxation and connecting with nature",
    cta: "Plan Trek",
    gradient: "from-emerald-900/80 via-green-900/60 to-teal-900/80",
  },
  {
    image: "Sonamarg glacier with wildflowers and dramatic mountain backdrop",
    title: "Majestic Beauty",
    subtitle: "of Sonamarg",
    description: "Gateway to glaciers and high-altitude adventures beyond imagination",
    cta: "Discover More",
    gradient: "from-orange-900/80 via-red-900/60 to-pink-900/80",
  },
]

const destinations = [
  {
    name: "Dal Lake",
    location: "Srinagar",
    image: "Dal Lake with traditional houseboats and shikaras, surrounded by mountains",
    rating: 4.9,
    reviews: 2847,
    highlights: ["Houseboat Stay", "Shikara Rides", "Floating Gardens"],
    season: "All Year",
    temperature: "15-25°C",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Gulmarg",
    location: "Baramulla",
    image: "Gulmarg ski resort with snow-covered slopes and cable car",
    rating: 4.8,
    reviews: 1923,
    highlights: ["Skiing", "Gondola Ride", "Alpine Views"],
    season: "Winter",
    temperature: "-5 to 10°C",
    color: "from-indigo-500 to-purple-500",
  },
  {
    name: "Pahalgam",
    location: "Anantnag",
    image: "Pahalgam valley with green meadows, pine forests and river",
    rating: 4.7,
    reviews: 1654,
    highlights: ["Trekking", "River Rafting", "Pine Forests"],
    season: "Summer",
    temperature: "10-20°C",
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "Sonamarg",
    location: "Ganderbal",
    image: "Sonamarg meadow of gold with glaciers and wildflowers",
    rating: 4.6,
    reviews: 1432,
    highlights: ["Glacier Trek", "Camping", "Photography"],
    season: "Summer",
    temperature: "5-15°C",
    color: "from-orange-500 to-red-500",
  },
]

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "New York, USA",
    image: "Happy tourist woman in Kashmir traditional dress",
    rating: 5,
    text: "Kashmir exceeded all my expectations! The houseboat experience on Dal Lake was magical, and the hospitality was incredible.",
    trip: "7-day Cultural Tour",
  },
  {
    name: "Raj Patel",
    location: "Mumbai, India",
    image: "Indian family enjoying shikara ride on Dal Lake",
    rating: 5,
    text: "Perfect family vacation! Kids loved the snow in Gulmarg, and we enjoyed the authentic Kashmiri cuisine throughout our stay.",
    trip: "Family Adventure Package",
  },
  {
    name: "Emma Wilson",
    location: "London, UK",
    image: "Solo female traveler trekking in Kashmir mountains",
    rating: 5,
    text: "As a solo traveler, I felt completely safe and welcomed. The trekking in Pahalgam was breathtaking!",
    trip: "Solo Trekking Experience",
  },
]

const culturalHighlights = [
  {
    title: "Traditional Wazwan",
    description:
      "Experience the legendary 36-course traditional feast that represents the pinnacle of Kashmiri cuisine",
    image: "Traditional Kashmiri Wazwan feast with multiple dishes",
    category: "Cuisine",
    color: "from-amber-500 to-orange-500",
  },
  {
    title: "Pashmina Weaving",
    description: "Witness centuries-old craft traditions where artisans create the world's finest pashmina shawls",
    image: "Kashmiri artisan weaving pashmina shawl on traditional loom",
    category: "Craft",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Sufi Music",
    description: "Immerse yourself in the spiritual musical heritage that echoes through Kashmir's valleys",
    image: "Sufi musicians performing traditional Kashmiri music",
    category: "Music",
    color: "from-teal-500 to-cyan-500",
  },
  {
    title: "Saffron Harvest",
    description: "Discover the cultivation of the world's finest saffron in Kashmir's golden fields",
    image: "Saffron fields in Kashmir with farmers harvesting purple flowers",
    category: "Agriculture",
    color: "from-yellow-500 to-amber-500",
  },
]

export default function HomePage() {
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0)
  const [currentDestination, setCurrentDestination] = useState(0)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [currentCultural, setCurrentCultural] = useState(0)

  // Auto-advance hero slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  // Auto-advance testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const nextDestination = () => {
    setCurrentDestination((prev) => (prev + 1) % destinations.length)
  }

  const prevDestination = () => {
    setCurrentDestination((prev) => (prev - 1 + destinations.length) % destinations.length)
  }

  const nextCultural = () => {
    setCurrentCultural((prev) => (prev + 1) % culturalHighlights.length)
  }

  const prevCultural = () => {
    setCurrentCultural((prev) => (prev - 1 + culturalHighlights.length) % culturalHighlights.length)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      {/* Enhanced Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur-md supports-[backdrop-filter]:bg-white/80 shadow-lg">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center space-x-2 group cursor-pointer">
            <div className="relative">
              <Mountain className="h-8 w-8 text-emerald-600 group-hover:scale-110 transition-all duration-300 drop-shadow-lg" />
              <div className="absolute inset-0 bg-emerald-400 rounded-full blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent group-hover:from-emerald-500 group-hover:to-teal-500 transition-all duration-300">
              Kashmir Valley
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {["Destinations", "Hotels", "Cuisine", "Culture", "Artifacts"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-slate-600 hover:text-emerald-600 transition-all duration-300 hover:scale-105 relative group font-medium"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-600 to-teal-600 group-hover:w-full transition-all duration-300 rounded-full"></span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className="hover:scale-105 transition-all duration-300 hover:bg-emerald-50"
            >
              Sign In
            </Button>
            <Button
              size="sm"
              className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Book Now
            </Button>
          </div>
        </div>
      </header>

      {/* Enhanced Animated Hero Section */}
      <section className="relative h-[95vh] flex items-center justify-center overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1500 ease-in-out ${
              index === currentHeroSlide ? "opacity-100 scale-100" : "opacity-0 scale-110"
            }`}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${slide.gradient} z-10`} />
            <Image
              src={`/placeholder.svg?height=1080&width=1920&query=${slide.image}`}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black/20 z-15"></div>
          </div>
        ))}

        <div className="relative z-20 text-center text-white max-w-5xl px-4">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-bold leading-tight tracking-tight">
                <span className="block animate-fade-in-up">{heroSlides[currentHeroSlide].title}</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-400 to-cyan-400 animate-fade-in-delayed drop-shadow-2xl">
                  {heroSlides[currentHeroSlide].subtitle}
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed animate-fade-in-delayed-2 drop-shadow-lg">
                {heroSlides[currentHeroSlide].description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-delayed-3">
              <Button
                size="lg"
                className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-lg px-10 py-4 hover:scale-110 transition-all duration-300 group shadow-2xl hover:shadow-emerald-500/25 border-2 border-white/20"
              >
                <Calendar className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
                {heroSlides[currentHeroSlide].cta}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-2 border-white/50 hover:bg-white hover:text-slate-800 text-lg px-10 py-4 bg-white/10 backdrop-blur-sm hover:scale-110 transition-all duration-300 group shadow-2xl"
              >
                <Play className="mr-3 h-6 w-6 group-hover:scale-125 transition-transform duration-300" />
                Virtual Tour
              </Button>
            </div>
          </div>
        </div>

        {/* Enhanced Hero Navigation */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentHeroSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentHeroSlide
                  ? "w-12 h-3 bg-gradient-to-r from-emerald-400 to-teal-400 shadow-lg"
                  : "w-3 h-3 bg-white/50 hover:bg-white/75 hover:scale-125"
              }`}
            />
          ))}
        </div>

        {/* Enhanced Hero Navigation Arrows */}
        <button
          onClick={() => setCurrentHeroSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:scale-125 group"
        >
          <ChevronLeft className="h-8 w-8 text-white group-hover:scale-110 transition-transform duration-300" />
        </button>
        <button
          onClick={() => setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length)}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:scale-125 group"
        >
          <ChevronRight className="h-8 w-8 text-white group-hover:scale-110 transition-transform duration-300" />
        </button>
      </section>

      {/* Enhanced Quick Booking Bar */}
      <section className="bg-white shadow-2xl -mt-20 relative z-30 mx-4 md:mx-8 rounded-2xl p-8 animate-slide-up border border-emerald-100">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
          <div className="group">
            <label className="block text-sm font-semibold text-slate-700 mb-3 group-hover:text-emerald-600 transition-colors duration-300">
              Destination
            </label>
            <div className="relative">
              <MapPin className="absolute left-4 top-4 h-5 w-5 text-slate-400 group-hover:text-emerald-600 transition-colors duration-300" />
              <Input
                placeholder="Where to go?"
                className="pl-12 h-12 group-hover:border-emerald-300 transition-all duration-300 focus:ring-2 focus:ring-emerald-500 rounded-xl"
              />
            </div>
          </div>
          <div className="group">
            <label className="block text-sm font-semibold text-slate-700 mb-3 group-hover:text-emerald-600 transition-colors duration-300">
              Check-in
            </label>
            <Input
              type="date"
              className="h-12 group-hover:border-emerald-300 transition-colors duration-300 focus:ring-2 focus:ring-emerald-500 rounded-xl"
            />
          </div>
          <div className="group">
            <label className="block text-sm font-semibold text-slate-700 mb-3 group-hover:text-emerald-600 transition-colors duration-300">
              Guests
            </label>
            <div className="relative">
              <Users className="absolute left-4 top-4 h-5 w-5 text-slate-400 group-hover:text-emerald-600 transition-colors duration-300" />
              <Input
                placeholder="2 guests"
                className="pl-12 h-12 group-hover:border-emerald-300 transition-all duration-300 focus:ring-2 focus:ring-emerald-500 rounded-xl"
              />
            </div>
          </div>
          <Button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 h-12 hover:scale-105 transition-all duration-300 group shadow-lg hover:shadow-xl rounded-xl">
            <Search className="mr-3 h-5 w-5 group-hover:rotate-90 transition-transform duration-300" />
            Search
          </Button>
        </div>
      </section>

      {/* Enhanced Destinations Carousel */}
      <section id="destinations" className="py-24 px-4 bg-gradient-to-br from-slate-50 to-emerald-50">
        <div className="container mx-auto">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-slate-800 to-emerald-800 bg-clip-text text-transparent mb-6">
              Explore Kashmir
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              From serene lakes to majestic mountains, discover the most beautiful destinations in Kashmir
            </p>
          </div>

          <div className="relative max-w-7xl mx-auto">
            <div className="overflow-hidden rounded-3xl">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentDestination * 25}%)` }}
              >
                {destinations.map((destination, index) => (
                  <div key={index} className="w-1/4 flex-shrink-0 px-4">
                    <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 group bg-white border-0 shadow-lg">
                      <div className="relative h-72 overflow-hidden">
                        <Image
                          src={`/placeholder.svg?height=288&width=400&query=${destination.image}`}
                          alt={destination.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div
                          className={`absolute inset-0 bg-gradient-to-t ${destination.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                        ></div>
                        <div className="absolute top-4 right-4">
                          <Button
                            size="sm"
                            variant="secondary"
                            className="bg-white/90 hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg"
                          >
                            <Heart className="h-4 w-4 hover:text-red-500 transition-colors duration-300" />
                          </Button>
                        </div>
                        <div className="absolute top-4 left-4">
                          <Badge className={`bg-gradient-to-r ${destination.color} text-white shadow-lg`}>
                            {destination.season === "Winter" && <Snowflake className="h-3 w-3 mr-1" />}
                            {destination.season === "Summer" && <Sun className="h-3 w-3 mr-1" />}
                            {destination.season === "Spring" && <Leaf className="h-3 w-3 mr-1" />}
                            {destination.season}
                          </Badge>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-xl font-bold text-slate-800 group-hover:text-emerald-600 transition-colors duration-300">
                            {destination.name}
                          </h3>
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm font-semibold">{destination.rating}</span>
                          </div>
                        </div>
                        <p className="text-slate-600 mb-2 flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {destination.location}
                        </p>
                        <p className="text-sm text-slate-500 mb-4 font-medium">{destination.temperature}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {destination.highlights.map((highlight, idx) => (
                            <Badge
                              key={idx}
                              variant="secondary"
                              className="text-xs hover:bg-emerald-100 transition-colors duration-300"
                            >
                              {highlight}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-slate-500">{destination.reviews} reviews</span>
                          <Button
                            size="sm"
                            className={`bg-gradient-to-r ${destination.color} hover:scale-105 transition-all duration-300 shadow-lg`}
                          >
                            Explore
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced Carousel Navigation */}
            <button
              onClick={prevDestination}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 bg-white shadow-2xl rounded-full p-4 hover:bg-emerald-50 hover:scale-110 transition-all duration-300 z-10 border border-emerald-100"
            >
              <ChevronLeft className="h-6 w-6 text-emerald-600" />
            </button>
            <button
              onClick={nextDestination}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 bg-white shadow-2xl rounded-full p-4 hover:bg-emerald-50 hover:scale-110 transition-all duration-300 z-10 border border-emerald-100"
            >
              <ChevronRight className="h-6 w-6 text-emerald-600" />
            </button>
          </div>

          {/* Enhanced Carousel Indicators */}
          <div className="flex justify-center mt-12 space-x-3">
            {Array.from({ length: destinations.length - 3 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentDestination(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentDestination
                    ? "w-8 h-3 bg-gradient-to-r from-emerald-600 to-teal-600 shadow-lg"
                    : "w-3 h-3 bg-slate-300 hover:bg-emerald-300 hover:scale-125"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Cultural Showcase */}
      <section className="py-24 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-emerald-800 to-teal-800 bg-clip-text text-transparent mb-6">
              Cultural Heritage
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Immerse yourself in Kashmir's vibrant culture and centuries-old traditions
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentCultural * 100}%)` }}
              >
                {culturalHighlights.map((item, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white p-12">
                      <div className="relative h-96 overflow-hidden rounded-2xl group">
                        <Image
                          src={`/placeholder.svg?height=384&width=500&query=${item.image}`}
                          alt={item.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                        ></div>
                        <div className="absolute top-6 left-6">
                          <Badge className={`bg-gradient-to-r ${item.color} text-white shadow-lg text-sm px-3 py-1`}>
                            {item.category}
                          </Badge>
                        </div>
                      </div>
                      <div className="space-y-8">
                        <div>
                          <h3 className="text-4xl font-bold text-slate-800 mb-6 leading-tight">{item.title}</h3>
                          <p className="text-lg text-slate-600 mb-8 leading-relaxed">{item.description}</p>
                        </div>
                        <div className="flex space-x-4">
                          <Button
                            className={`bg-gradient-to-r ${item.color} hover:scale-105 transition-all duration-300 shadow-lg px-8 py-3`}
                          >
                            Learn More
                          </Button>
                          <Button
                            variant="outline"
                            className="hover:scale-105 transition-all duration-300 bg-transparent border-2 px-8 py-3"
                          >
                            Experience Now
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced Cultural Navigation */}
            <button
              onClick={prevCultural}
              className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white shadow-2xl rounded-full p-4 hover:bg-emerald-50 hover:scale-110 transition-all duration-300 border border-emerald-100"
            >
              <ChevronLeft className="h-6 w-6 text-emerald-600" />
            </button>
            <button
              onClick={nextCultural}
              className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white shadow-2xl rounded-full p-4 hover:bg-emerald-50 hover:scale-110 transition-all duration-300 border border-emerald-100"
            >
              <ChevronRight className="h-6 w-6 text-emerald-600" />
            </button>

            {/* Enhanced Cultural Indicators */}
            <div className="flex justify-center mt-12 space-x-3">
              {culturalHighlights.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentCultural(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentCultural
                      ? "w-8 h-3 bg-gradient-to-r from-emerald-600 to-teal-600 shadow-lg"
                      : "w-3 h-3 bg-slate-300 hover:bg-emerald-300 hover:scale-125"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Hotels Section (keeping original structure) */}
      <section id="hotels" className="py-24 bg-gradient-to-br from-white to-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-slate-800 to-emerald-800 bg-clip-text text-transparent mb-6">
              Luxury Accommodations
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Stay in comfort and style with our carefully selected hotels and houseboats
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Dal Lake Houseboat",
                type: "Traditional Houseboat",
                price: "₹8,500",
                image: "Luxury houseboat on Dal Lake with traditional Kashmiri architecture",
                amenities: ["Lake View", "Traditional Decor", "Complimentary Shikara"],
                color: "from-blue-500 to-cyan-500",
              },
              {
                name: "Gulmarg Resort & Spa",
                type: "Mountain Resort",
                price: "₹12,000",
                image: "Luxury mountain resort in Gulmarg with snow-capped peaks view",
                amenities: ["Spa", "Ski Access", "Mountain View"],
                color: "from-purple-500 to-indigo-500",
              },
              {
                name: "Pahalgam Valley Hotel",
                type: "Boutique Hotel",
                price: "₹6,500",
                image: "Boutique hotel in Pahalgam valley surrounded by pine forests",
                amenities: ["Garden View", "Restaurant", "Trekking Guide"],
                color: "from-green-500 to-emerald-500",
              },
            ].map((hotel, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 group border-0 shadow-lg"
              >
                <div className="relative h-64">
                  <Image
                    src={`/placeholder.svg?height=256&width=400&query=${hotel.image}`}
                    alt={hotel.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${hotel.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                  ></div>
                </div>
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-slate-800 group-hover:text-emerald-600 transition-colors duration-300">
                      {hotel.name}
                    </h3>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-slate-600 text-sm mb-4 font-medium">{hotel.type}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {hotel.amenities.map((amenity, idx) => (
                      <Badge
                        key={idx}
                        variant="outline"
                        className="text-xs hover:bg-emerald-50 transition-colors duration-300"
                      >
                        {amenity}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                        {hotel.price}
                      </span>
                      <span className="text-slate-500 text-sm">/night</span>
                    </div>
                    <Button
                      size="sm"
                      className={`bg-gradient-to-r ${hotel.color} hover:scale-105 transition-all duration-300 shadow-lg`}
                    >
                      Book Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Slider */}
      <section className="py-24 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 overflow-hidden relative">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-white mb-6 drop-shadow-lg">What Our Guests Say</h2>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
              Real experiences from travelers who discovered the magic of Kashmir
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white shadow-2xl">
                      <CardContent className="p-12 text-center">
                        <Quote className="h-16 w-16 text-emerald-300 mx-auto mb-8 opacity-60" />
                        <p className="text-2xl mb-8 leading-relaxed font-light italic">"{testimonial.text}"</p>
                        <div className="flex items-center justify-center space-x-6 mb-6">
                          <div className="relative w-20 h-20 rounded-full overflow-hidden ring-4 ring-white/30">
                            <Image
                              src={`/placeholder.svg?height=80&width=80&query=${testimonial.image}`}
                              alt={testimonial.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="text-left">
                            <h4 className="font-bold text-xl">{testimonial.name}</h4>
                            <p className="text-emerald-200 text-sm">{testimonial.location}</p>
                            <p className="text-emerald-300 text-sm font-medium">{testimonial.trip}</p>
                          </div>
                        </div>
                        <div className="flex justify-center space-x-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced Testimonial Indicators */}
            <div className="flex justify-center mt-12 space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentTestimonial
                      ? "w-8 h-3 bg-white shadow-lg"
                      : "w-3 h-3 bg-white/50 hover:bg-white/75 hover:scale-125"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "50K+", label: "Happy Travelers", icon: Users, color: "from-blue-500 to-cyan-500" },
              { number: "200+", label: "Destinations", icon: MapPin, color: "from-green-500 to-emerald-500" },
              { number: "15+", label: "Years Experience", icon: Award, color: "from-purple-500 to-pink-500" },
              { number: "98%", label: "Satisfaction Rate", icon: Star, color: "from-yellow-500 to-orange-500" },
            ].map((stat, index) => (
              <div key={index} className="text-center group hover:scale-110 transition-all duration-300">
                <div
                  className={`bg-gradient-to-br ${stat.color} rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:shadow-2xl transition-all duration-300 shadow-lg`}
                >
                  <stat.icon className="h-10 w-10 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-4xl font-bold text-slate-800 mb-3">{stat.number}</h3>
                <p className="text-slate-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Newsletter Section */}
      <section className="py-24 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl font-bold text-white mb-6 animate-fade-in-up drop-shadow-lg">Stay Updated</h2>
          <p className="text-xl text-emerald-100 mb-12 max-w-3xl mx-auto animate-fade-in-up leading-relaxed">
            Get the latest updates on Kashmir tourism, special offers, and cultural events
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto animate-fade-in-up">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white/10 border-white/20 text-white placeholder:text-emerald-100 hover:bg-white/20 transition-colors duration-300 h-12 rounded-xl backdrop-blur-sm"
            />
            <Button className="bg-white text-emerald-600 hover:bg-emerald-50 hover:scale-105 transition-all duration-300 h-12 px-8 rounded-xl shadow-lg">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="animate-fade-in-up">
              <div className="flex items-center space-x-3 mb-6 group">
                <div className="relative">
                  <Mountain className="h-10 w-10 text-emerald-400 group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-emerald-400 rounded-full blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                </div>
                <span className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Kashmir Valley
                </span>
              </div>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Discover the paradise of Kashmir with authentic experiences and warm hospitality.
              </p>
              <div className="flex space-x-4">
                {[Facebook, Instagram, Twitter].map((Icon, index) => (
                  <Button
                    key={index}
                    size="sm"
                    variant="ghost"
                    className="text-slate-400 hover:text-emerald-400 hover:scale-110 transition-all duration-300 p-3"
                  >
                    <Icon className="h-5 w-5" />
                  </Button>
                ))}
              </div>
            </div>

            {[
              {
                title: "Destinations",
                links: ["Srinagar", "Gulmarg", "Pahalgam", "Sonamarg"],
              },
              {
                title: "Experience",
                links: ["Hotels", "Cuisine", "Culture", "Artifacts"],
              },
              {
                title: "Contact",
                links: [
                  { icon: Phone, text: "+91 194 2501234" },
                  { icon: Mail, text: "info@kashmirvalley.com" },
                  { icon: MapPin, text: "Srinagar, Kashmir" },
                ],
              },
            ].map((section, index) => (
              <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <h3 className="text-xl font-bold mb-6 text-emerald-400">{section.title}</h3>
                <ul className="space-y-3 text-slate-400">
                  {section.links.map((link, idx) => (
                    <li key={idx}>
                      {typeof link === "string" ? (
                        <Link
                          href="#"
                          className="hover:text-emerald-400 transition-all duration-300 hover:translate-x-2 inline-block"
                        >
                          {link}
                        </Link>
                      ) : (
                        <div className="flex items-center space-x-3 hover:text-emerald-400 transition-colors duration-300">
                          <link.icon className="h-5 w-5" />
                          <span>{link.text}</span>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-slate-800 mt-16 pt-8 text-center text-slate-400 animate-fade-in-up">
            <p>&copy; 2024 Kashmir Valley Tourism. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
