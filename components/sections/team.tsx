"use client";
import { Github, Linkedin, Twitter, Facebook } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { motion, useInView } from "framer-motion";
import {
  staggerContainer,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  fadeIn,
} from "@/lib/animations";
import { useLoading } from "@/context/LoadingContext";
import { useRef } from "react";

export function Team() {
  const { isLoading } = useLoading();
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-50px" });

  const founders = [
    {
      name: "Nasim",
      role: "Co-Founder & Partner",
      description:
        "Nasim has managed development of multi-vendor, classified and drop shipping e-commerce platforms, LMS, portfolio and blogs. Developed React, NextJs, and WordPress projects.",
      avatar: "N",
      avatarUrl:
        "https://eba88uequf.ufs.sh/f/1ZJ049kRLBlD3dLg2aGvFralyb15M8YGIgS67TJPVuONxLAB",
      socials: [
        { icon: Github, href: "https://github.com/inasim4" },
        { icon: Linkedin, href: "https://www.linkedin.com/in/inasim" },
        { icon: Facebook, href: "https://www.facebook.com/iNasim4" },
      ],
    },
    {
      name: "Fahim",
      role: "Co-Founder & Partner",
      description:
        "Fahim is a MERN stack developer with WordPress experience. He have experience with PHP, JavaScript, React, NextJs, Tailwind CSS and Git to develop user-focused web applications.",
      avatar: "F",
      avatarUrl:
        "https://eba88uequf.ufs.sh/f/1ZJ049kRLBlDmMtJx3jNxSFgVvqeKWOEdhCBY0csaMP8zbuw",
      socials: [
        { icon: Github, href: "https://github.com/FAHIMXGG" },
        { icon: Linkedin, href: "https://www.linkedin.com/in/fahimx" },
        { icon: Facebook, href: "https://www.facebook.com/FAHIMX007" },
      ],
    },
  ];

  return (
    <section id="team" className="w-full py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          ref={sectionRef}
          className="text-center space-y-4 mb-16"
          variants={staggerContainer}
          initial="hidden"
          animate={!isLoading && inView ? "visible" : "hidden"}
        >
          <motion.div variants={fadeInUp}>
            <Badge variant="secondary" className="px-4 py-2">
              Meet Our Team
            </Badge>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold"
          >
            Meet the Founders
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            We're a compacted team driven by passion, focused on crafting
            digital experiences that truly make a difference.
          </motion.p>
        </motion.div>

        {/* Team grid with staggered children */}
        <motion.div
          className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          animate={!isLoading && inView ? "visible" : "hidden"}
        >
          {founders.map((founder, index: number) => (
            // Alternate left/right fade for best-practice effect
            <motion.div
              key={index}
              variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
            >
              <Card className="text-center transition-all hover:shadow-lg border-2 border-muted/40 bg-background/80">
                <CardHeader>
                  <div className="flex justify-center">
                    <Avatar className="w-36 h-36 mx-auto mb-6 border-4 border-primary/60 shadow-lg bg-background">
                      <AvatarImage
                        src={founder.avatarUrl}
                        alt={founder.name}
                        className="object-cover w-full h-full"
                      />
                      <AvatarFallback className="text-3xl font-bold">
                        {founder.avatar}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <CardTitle className="text-2xl font-bold mb-1">
                    {founder.name}
                  </CardTitle>
                  <CardDescription className="mb-2">
                    {founder.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-muted-foreground">
                    {founder.description}
                  </p>
                  <div className="flex justify-center gap-4 mb-2">
                    {founder.socials.map(
                      (
                        social: { icon: React.ElementType; href: string },
                        i: number
                      ) => (
                        <motion.div key={i} variants={fadeIn}>
                          <Button
                            variant="ghost"
                            size="icon"
                            asChild
                            className="hover:bg-primary/10"
                          >
                            <a
                              href={social.href}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <social.icon className="w-5 h-5" />
                              <span className="sr-only">{social.href}</span>
                            </a>
                          </Button>
                        </motion.div>
                      )
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
