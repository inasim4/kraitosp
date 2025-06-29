"use client";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useLoading } from "@/context/LoadingContext";
import {
  staggerContainer,
  fadeInUp,
  heroTitle,
  heroSubtitle,
  heroButtons,
  heroImage,
  scaleInBounce,
  fadeInLeft,
  fadeInRight,
  fadeIn,
} from "@/lib/animations";

export function Hero() {
  const features = [
    "SEO-Optimized",
    "Conversion-Focused",
    "Mobile Responsive",
    "Speed Optimized",
  ];

  const { isLoading } = useLoading();

  return (
    <section id="home" className="w-full py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          className="flex flex-col items-center text-center space-y-8"
          variants={staggerContainer}
          initial="hidden"
          animate={isLoading ? "hidden" : "visible"}
        >
          <motion.div variants={fadeInUp}>
            <Badge variant="secondary" className="px-4 py-2">
              Kraito - Neighborhood Web Development Professionals
            </Badge>
          </motion.div>

          <motion.div variants={heroTitle} className="space-y-4 max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              We Build Websites That Drive{" "}
              <span className="text-primary">Results</span>
            </h1>
          </motion.div>

          <motion.div variants={heroSubtitle} className="max-w-2xl mx-auto">
            <p className="text-xl text-muted-foreground">
              A compacted web development team crafting high-performance,
              conversion-focused websites for entrepreneurs and growing
              businesses.
            </p>
          </motion.div>

          <motion.div
            variants={heroButtons}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.div
              variants={scaleInBounce}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" asChild>
                <a href="#contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </motion.div>
            <motion.div
              variants={scaleInBounce}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" variant="outline" asChild>
                <a href="#work">View Our Portfolio</a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Animated feature badges with alternating left/right fade */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-6 pt-8 pb-2"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2 text-sm"
                variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
                whileHover={{ scale: 1.05 }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div
                  variants={fadeIn}
                  className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    delay: 1 + index * 0.1,
                    type: "spring",
                    stiffness: 200,
                    damping: 10,
                  }}
                >
                  <Check className="w-4 h-4 text-white" />
                </motion.div>
                <span className="text-muted-foreground">{feature}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Hero Image with enhanced animations */}
          <motion.div variants={heroImage} className="w-full max-w-6xl mx-auto">
            <Card className="relative overflow-hidden p-0 rounded-lg border-0 shadow-none">
              <motion.div
                className="aspect-video w-full"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img
                  src="https://eba88uequf.ufs.sh/f/1ZJ049kRLBlDZBulv49Ln5sjbq89WouRUIpc4Pvh21OMQg0i"
                  alt="Team working on web development projects"
                  className="w-full h-full object-cover m-0 p-0 align-top rounded-lg"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 1.2,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    delay: 0.8,
                  }}
                />
              </motion.div>
              <motion.div
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 md:p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 1.2,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <blockquote className="text-lg md:text-xl font-medium text-white">
                  "Our websites aren't just beautiful—they're crafted to drive
                  results and grow your business."
                </blockquote>
              </motion.div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
