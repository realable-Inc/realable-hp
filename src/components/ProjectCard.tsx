'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ProjectCardProps {
  title: string;
  challenge: string;
  solution: string;
  category: string;
  image: string;
}

export default function ProjectCard({ title, challenge, solution, category, image }: ProjectCardProps) {
  const [showSolution, setShowSolution] = useState(false);

  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg">
      {/* Project Image */}
      <div className={`h-48 relative ${image}`}>
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center rounded-full bg-background/80 backdrop-blur-sm px-3 py-1 text-xs font-medium text-foreground">
            {category}
          </span>
        </div>
      </div>

      <CardHeader className="pb-3">
        {/* Title and Toggle */}
        <div className="flex items-start justify-between gap-4">
          <CardTitle className="text-lg font-semibold leading-tight">{title}</CardTitle>
          <div className="flex items-center rounded-full bg-muted p-1 shrink-0">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowSolution(false)}
              className={`h-7 px-3 text-xs rounded-full transition-all duration-200 ${
                !showSolution 
                  ? 'bg-background text-foreground shadow-sm' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              課題
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowSolution(true)}
              className={`h-7 px-3 text-xs rounded-full transition-all duration-200 ${
                showSolution 
                  ? 'bg-background text-foreground shadow-sm' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              解決
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        {/* Content with fade transition */}
        <div className="relative min-h-[60px] mb-6">
          <CardDescription
            className={`absolute inset-0 transition-all duration-300 ease-in-out ${
              showSolution ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
            }`}
          >
            {challenge}
          </CardDescription>
          <CardDescription
            className={`absolute inset-0 transition-all duration-300 ease-in-out ${
              showSolution ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
            }`}
          >
            {solution}
          </CardDescription>
        </div>

        {/* Detail Link */}
        <Button 
          variant="ghost" 
          className="p-0 h-auto text-sm text-muted-foreground hover:text-foreground transition-colors group-hover:text-foreground"
        >
          詳細を見る
          <svg 
            className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Button>
      </CardContent>
    </Card>
  );
}