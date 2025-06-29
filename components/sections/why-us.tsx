"use client";
import {
  Headphones,
  MessagesSquare,
  Code,
  Search,
  Award,
  Zap,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, useInView } from "framer-motion";
import { useLoading } from "@/context/LoadingContext";
import { useRef } from "react";
import {
  staggerContainer,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  fadeIn,
} from "@/lib/animations";

export function WhyUs() {
  const { isLoading } = useLoading();
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-50px" });

  const features = [
    {
      icon: MessagesSquare,
      title: "Direct Communication",
      description:
        "Work directly with the developers. No account managers or middlemen slowing things down.",
    },
    {
      icon: Code,
      title: "Custom Solutions",
      description:
        "Personalized attention to every project with custom solutions tailored to your unique needs.",
    },
    {
      icon: Headphones,
      title: "Ongoing Support",
      description:
        "Friendly, responsive support even after your project launches. We're invested in your success.",
    },
    {
      icon: Search,
      title: "SEO-Optimized",
      description:
        "Smart, search-friendly SEO built to boost visibility and drive organic traffic.",
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description:
        "We work efficiently to get your project live quickly without compromising on quality",
    },
    {
      icon: Award,
      title: "Verified Excellence",
      description:
        "Envato-certified quality and Fiverr-trusted service. We deliver with care and consistency.",
    },
  ];

  return (
    <section id="why-us" className="w-full py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Single motion container for the whole section */}
        <motion.div
          ref={sectionRef}
          variants={staggerContainer}
          initial="hidden"
          animate={!isLoading && inView ? "visible" : "hidden"}
        >
          {/* Header Section */}
          <div className="text-center space-y-4 mb-16">
            <motion.div variants={fadeInUp}>
              <Badge variant="secondary" className="px-4 py-2">
                Why Choose Us
              </Badge>
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold"
            >
              Why Work With Us
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              We're your dedicated partners in crafting a smart online presence.
              Here's what sets us apart and makes us the web professionals you
              need.
            </motion.p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                // Alternate left/right fade for best-practice effect
                <motion.div
                  variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
                  key={index}
                >
                  <Card className="transition-all hover:shadow-md h-full">
                    <CardHeader>
                      <motion.div
                        variants={fadeIn}
                        className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4"
                      >
                        <Icon className="w-6 h-6 text-primary" />
                      </motion.div>
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{feature.description}</CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
