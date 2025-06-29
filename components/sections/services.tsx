"use client";
import {
  Check,
  ArrowRight,
  Code,
  ShoppingCart,
  Zap,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import { useLoading } from "@/context/LoadingContext";
import { useRef } from "react";
import {
  staggerContainer,
  fadeInUp,
  fadeIn,
  fadeInLeft,
  fadeInRight,
} from "@/lib/animations";

export function Services() {
  const { isLoading } = useLoading();
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-50px" });

  const services = {
    "custom-websites": {
      icon: Code,
      title: "Custom Websites",
      description:
        "Tailored websites that perfectly match your brand and business needs.",
      features: [
        "Responsive design for all devices",
        "SEO optimization built-in",
        "Custom functionality",
        "Content management systems",
      ],
      technologies: [
        "WordPress",
        "Next.js",
        "React",
        "Webflow",
        "Wix",
        "HubSpot",
      ],
      image:
        "https://eba88uequf.ufs.sh/f/1ZJ049kRLBlDxF4sIgrN4vSMbWQw2Cr7fqcnaTKXJkzheEIt",
    },
    "e-commerce": {
      icon: ShoppingCart,
      title: "E-commerce",
      description:
        "Powerful online stores that drive sales and enhance customer experience.",
      features: [
        "Secure payment processing",
        "Inventory management",
        "Mobile-optimized checkout",
        "Analytics and reporting",
      ],
      technologies: ["Shopify", "WooCommerce", "Next.js", "Custom"],
      image:
        "https://eba88uequf.ufs.sh/f/1ZJ049kRLBlDw8XbIt7f8PSjK3csD9IVhHLt14ZUx0JeRWlE",
    },
    "web-applications": {
      icon: Zap,
      title: "Web Applications",
      description:
        "Scalable web applications built with modern technologies and frameworks.",
      features: [
        "Real-time functionality",
        "User authentication",
        "Database integration",
        "API development",
      ],
      technologies: ["React", "Next.js", "Webflow", "HubSpot"],
      image:
        "https://eba88uequf.ufs.sh/f/1ZJ049kRLBlDmUfABkjNxSFgVvqeKWOEdhCBY0csaMP8zbuw",
    },
    "digital-marketing": {
      icon: Search,
      title: "Digital Marketing",
      description:
        "Comprehensive digital marketing strategies to grow your online presence.",
      features: [
        "Search engine optimization",
        "Social media marketing",
        "Content strategy",
        "Performance tracking",
      ],
      technologies: ["HubSpot", "WordPress", "Wix", "Webflow"],
      image:
        "https://eba88uequf.ufs.sh/f/1ZJ049kRLBlDmzStLRjNxSFgVvqeKWOEdhCBY0csaMP8zbuw",
    },
  };

  return (
    <section id="services" className="w-full py-16 md:py-20 bg-muted/50">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Single motion container for the whole section, like in hero.tsx */}
        <motion.div
          ref={sectionRef}
          variants={staggerContainer}
          initial="hidden"
          animate={!isLoading && inView ? "visible" : "hidden"}
        >
          {/* Header section */}
          <div className="text-center space-y-4 mb-16">
            <motion.div variants={fadeInUp}>
              <Badge variant="secondary" className="px-4 py-2">
                Our Services
              </Badge>
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold"
            >
              Tailored Digital Services & Solutions
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              We specialize in crafting custom websites across various
              platforms, ensuring your online presence perfectly matches your
              business needs.
            </motion.p>
          </div>

          {/* Mobile View - Cards */}
          <div className="block lg:hidden space-y-6">
            {Object.entries(services).map(([key, service]) => {
              const Icon = service.icon;
              return (
                // Alternate left/right fade for best-practice effect
                <motion.div
                  variants={parseInt(key) % 2 === 0 ? fadeInLeft : fadeInRight}
                  key={key}
                >
                  <Card className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className="aspect-[4/3] w-full pt-0 pb-4 px-4">
                        <img
                          src={service.image || "/placeholder.svg"}
                          alt={service.title}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                      <div className="pt-2 pb-2 px-6">
                        <div className="flex items-center gap-3 mb-4">
                          <motion.div
                            variants={fadeIn}
                            className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center"
                          >
                            <Icon className="w-6 h-6 text-primary" />
                          </motion.div>
                          <h3 className="text-2xl font-bold">
                            {service.title}
                          </h3>
                        </div>
                        <p className="text-muted-foreground mb-4">
                          {service.description}
                        </p>
                        <div className="space-y-3 mb-4">
                          {service.features.map((feature, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-3"
                            >
                              <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                                <Check className="w-4 h-4 text-white" />
                              </div>
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                        <div>
                          <p className="font-medium mb-3">Technologies:</p>
                          <div className="flex flex-wrap gap-2">
                            {service.technologies.map((tech, index) => (
                              <Badge key={index} variant="outline">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Desktop View - Tabs */}
          <motion.div className="hidden lg:block" variants={fadeInUp}>
            <Tabs defaultValue="custom-websites" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                {Object.entries(services).map(([key, service]) => {
                  const Icon = service.icon;
                  return (
                    <TabsTrigger
                      key={key}
                      value={key}
                      className="flex items-center gap-2"
                    >
                      <Icon className="w-4 h-4" />
                      <span>{service.title}</span>
                    </TabsTrigger>
                  );
                })}
              </TabsList>

              {Object.entries(services).map(([key, service], idx) => {
                const Icon = service.icon;
                return (
                  <TabsContent key={key} value={key}>
                    {/* Alternate left/right fade for best-practice effect */}
                    <motion.div
                      variants={idx % 2 === 0 ? fadeInLeft : fadeInRight}
                      initial="hidden"
                      animate="visible"
                      key={key} // Re-trigger animation on tab change
                    >
                      <Card className="overflow-hidden">
                        <CardContent className="p-0">
                          <div className="grid grid-cols-2">
                            <div className="p-6">
                              <div className="flex items-center gap-3 mb-4">
                                <motion.div
                                  variants={fadeIn}
                                  className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center"
                                >
                                  <Icon className="w-6 h-6 text-primary" />
                                </motion.div>
                                <h3 className="text-2xl font-bold">
                                  {service.title}
                                </h3>
                              </div>
                              <p className="text-muted-foreground mb-4">
                                {service.description}
                              </p>
                              <div className="space-y-3 mb-4">
                                {service.features.map((feature, index) => (
                                  <div
                                    key={index}
                                    className="flex items-center gap-3"
                                  >
                                    <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                                      <Check className="w-4 h-4 text-white" />
                                    </div>
                                    <span>{feature}</span>
                                  </div>
                                ))}
                              </div>
                              <div>
                                <p className="font-medium mb-3">
                                  Technologies:
                                </p>
                                <div className="flex flex-wrap gap-2">
                                  {service.technologies.map((tech, index) => (
                                    <Badge key={index} variant="outline">
                                      {tech}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            </div>
                            <div className="aspect-[4/3] py-0 px-4">
                              <img
                                src={service.image || "/placeholder.svg"}
                                alt={service.title}
                                className="w-full h-full object-cover rounded-lg"
                              />
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </TabsContent>
                );
              })}
            </Tabs>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
