"use client";

import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from "@/components/ui/animated-modal";
import { BackgroundLines } from "@/components/ui/background-lines";
import { FlipWords } from "@/components/ui/flip-words";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { callToAction, images, message, title } from "@/constants";
import { motion } from "framer-motion";
import React from "react";

export default function LandingPage() {
  return (
    <BackgroundLines>
      <div className="flex min-h-screen items-center justify-center py-40">
        <Modal>
          <ModalTrigger>
            <span className="font-sans">
              <FlipWords words={callToAction} duration={500} />
            </span>
          </ModalTrigger>
          <ModalBody>
            <ModalContent>
              <p className="mb-8 space-x-2 text-center font-mono text-2xl font-bold md:text-4xl">
                {title}
              </p>
              <div className="flex items-center justify-center">
                {images.map((item) => (
                  <motion.div
                    key={item.id}
                    style={{
                      rotate: Math.random() * 20 - 10,
                    }}
                    whileHover={{
                      scale: 1.1,
                      rotate: 0,
                      zIndex: 100,
                    }}
                    whileTap={{
                      scale: 1.1,
                      rotate: 0,
                      zIndex: 100,
                    }}
                    className="-mr-4 mt-4 flex-shrink-0 overflow-hidden rounded-xl border border-neutral-100 bg-white p-1 dark:border-neutral-700 dark:bg-neutral-800"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.src}
                      alt={item.alt}
                      width="500"
                      height="500"
                      className="h-20 w-20 flex-shrink-0 rounded-lg object-cover md:h-40 md:w-40"
                    />
                  </motion.div>
                ))}
              </div>
              <div className="mx-auto flex max-w-sm flex-wrap items-start justify-start gap-x-4 gap-y-6 py-10 font-sans">
                <TextGenerateEffect
                  duration={2}
                  filter={true}
                  words={message}
                />
              </div>
            </ModalContent>
          </ModalBody>
        </Modal>
      </div>
    </BackgroundLines>
  );
}
