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
  meetingType = "Video call via Google Meet",
  bookingUrl = "https://calendly.com"
}: ScheduleCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-8 max-w-md mx-auto shadow-sm">
      <div className="flex items-center justify-center gap-3 mb-4">
        <Calendar className="w-6 h-6 text-blue-600" />
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      </div>
      
      <p className="text-gray-600 text-center mb-6 leading-relaxed">
        {description}
      </p>
      
      <div className="bg-gray-50 rounded-lg p-4 mb-6 border border-gray-100">
        <div className="flex items-center gap-3 text-gray-700">
          <Clock className="w-5 h-5 text-gray-400" />
          <div>
            <p className="font-medium">{duration}</p>
            <p className="text-sm text-gray-500">{meetingType}</p>
          </div>
        </div>
      </div>
      
      <a
        href={bookingUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2"
      >
        <Calendar className="w-5 h-5" />
        Book a Meeting
      </a>
    </div>
  );
}