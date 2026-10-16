import { Calendar, Clock } from 'lucide-react';

interface ScheduleCardProps {
  title?: string;
  description?: string;
  duration?: string;
  meetingType?: string;
  bookingUrl?: string;
}

export default function ScheduleCard({
  title = "Schedule a Chat",
  description = "Book a 30-minute intro call to discuss opportunities, projects, or collaborations.",
  duration = "30 minutes",
  meetingType = "Video call via Calendly & Google Meet",
  bookingUrl = "https://calendly.com"
}: ScheduleCardProps) {
  return (
    <div className="bg-panel border border-line rounded-lg p-8 max-w-md mx-auto shadow-sm">
      <div className="flex items-center justify-center gap-3 mb-4">
        <Calendar className="w-6 h-6 text-accent" />
        <h3 className="text-xl font-semibold text-foreground">{title}</h3>
      </div>
      
      <p className="text-muted-on-warm text-center mb-6 leading-relaxed">
        {description}
      </p>
      
      <div className="bg-background rounded-lg p-4 mb-6 border border-line">
        <div className="flex items-center gap-3 text-foreground">
          <Clock className="w-5 h-5 text-muted-on-warm" />
          <div>
            <p className="font-medium">{duration}</p>
            <p className="text-sm text-muted-on-warm">{meetingType}</p>
          </div>
        </div>
      </div>
      
      <a
        href={bookingUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full px-6 py-3 bg-accent text-panel rounded-lg font-medium hover:bg-foreground transition-all shadow-sm hover:shadow-sm flex items-center justify-center gap-2"
      >
        <Calendar className="w-5 h-5" />
        Book a Meeting
      </a>
    </div>
  );
}