import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  condition: string;
  quote: string;
  rating: number;
}

const TestimonialCard = ({ name, condition, quote, rating }: TestimonialCardProps) => {
  return (
    <Card className="border-border bg-card h-full">
      <CardContent className="pt-6">
        <div className="flex gap-1 mb-4" aria-label={`${rating} out of 5 stars`}>
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
          ))}
        </div>
        <blockquote className="text-foreground mb-4 leading-relaxed italic">
          "{quote}"
        </blockquote>
        <div className="border-t border-border pt-4">
          <p className="font-semibold text-foreground">{name}</p>
          <p className="text-sm text-muted-foreground">{condition}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
