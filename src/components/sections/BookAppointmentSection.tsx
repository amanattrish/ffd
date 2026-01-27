"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Bell } from "lucide-react";
import { homeContent } from "@/content";

// Generate calendar days for a given month
function getCalendarDays(year: number, month: number) {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const daysInMonth = lastDay.getDate();
  const startingDayOfWeek = firstDay.getDay();
  
  // Get previous month's last days
  const prevMonth = month === 0 ? 11 : month - 1;
  const prevYear = month === 0 ? year - 1 : year;
  const prevMonthLastDay = new Date(prevYear, prevMonth + 1, 0);
  const prevMonthDays = prevMonthLastDay.getDate();

  const days: Array<{ day: number; isCurrentMonth: boolean; isNextMonth?: boolean }> = [];
  
  // Add previous month's trailing days
  for (let i = startingDayOfWeek - 1; i >= 0; i--) {
    days.push({ day: prevMonthDays - i, isCurrentMonth: false });
  }
  
  // Add all days of the current month
  for (let i = 1; i <= daysInMonth; i++) {
    days.push({ day: i, isCurrentMonth: true });
  }
  
  // Add next month's leading days to fill the grid (42 cells total for 6 rows)
  const remainingCells = 42 - days.length;
  for (let i = 1; i <= remainingCells; i++) {
    days.push({ day: i, isCurrentMonth: false, isNextMonth: true });
  }
  
  return days;
}

// Generate time slots
function generateTimeSlots() {
  const slots = [];
  const startHour = 9;
  const endHour = 17; // 5 PM
  const slotDuration = 15; // 15 minutes
  
  for (let hour = startHour; hour < endHour; hour++) {
    for (let minute = 0; minute < 60; minute += slotDuration) {
      const startTime = `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`;
      const endMinute = minute + slotDuration;
      const endHourActual = endMinute >= 60 ? hour + 1 : hour;
      const endMinuteActual = endMinute >= 60 ? endMinute - 60 : endMinute;
      const endTime = `${endHourActual.toString().padStart(2, "0")}:${endMinuteActual.toString().padStart(2, "0")}`;
      
      const period = hour >= 12 ? "PM" : "AM";
      const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
      const displayEndHour = endHourActual > 12 ? endHourActual - 12 : endHourActual === 0 ? 12 : endHourActual;
      
      // Format for display (without leading zero for single digit hours)
      const displayStart = `${displayHour}:${startTime.split(":")[1]} ${period}`;
      const displayEnd = `${displayEndHour}:${endTime.split(":")[1]} ${period}`;
      
      // Format for scheduling box (with leading zeros, e.g., "09:15 AM")
      const scheduleStartHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
      const scheduleEndHour = endHourActual > 12 ? endHourActual - 12 : endHourActual === 0 ? 12 : endHourActual;
      const scheduleStart = `${scheduleStartHour.toString().padStart(2, "0")}:${startTime.split(":")[1]} ${period.toUpperCase()}`;
      const scheduleEnd = `${scheduleEndHour.toString().padStart(2, "0")}:${endTime.split(":")[1]} ${period.toUpperCase()}`;
      
      slots.push({
        id: `${startTime}-${endTime}`,
        start: displayStart,
        end: displayEnd,
        scheduleStart,
        scheduleEnd,
        startTime,
        endTime,
      });
    }
  }
  
  return slots;
}

export default function BookAppointmentSection() {
  const router = useRouter();
  const { booking } = homeContent;
  const [selectedDate, setSelectedDate] = useState<number>(19);
  const [selectedTime, setSelectedTime] = useState<string | null>("09:00-09:15");
  const [currentMonth, setCurrentMonth] = useState(11); // December (0-indexed)
  const [currentYear, setCurrentYear] = useState(2025);
  
  const timeSlots = generateTimeSlots();
  const calendarDays = getCalendarDays(currentYear, currentMonth);
  
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  
  const dayNames = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  
  const formatDate = (day: number) => {
    const date = new Date(currentYear, currentMonth, day);
    return `${day.toString().padStart(2, "0")}-${(currentMonth + 1).toString().padStart(2, "0")}-${currentYear}`;
  };
  
  const formatTimeRange = () => {
    if (!selectedTime) return "";
    const slot = timeSlots.find(s => s.id === selectedTime);
    if (!slot) return "";
    // Format for scheduling box: "09:15 AM - 09:30 AM" (with leading zeros)
    return `${slot.scheduleStart} - ${slot.scheduleEnd}`;
  };
  
  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };
  
  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };
  
  return (
    <section className="py-12 lg:py-16 relative">
      {/* Decorative background element - subtle dental theme */}
      {/* <div className="absolute left-0 top-1/2 -translate-y-1/2 opacity-5 hidden lg:block">
        <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M75 15C45 15 15 45 15 75C15 105 45 135 75 135C105 135 135 105 135 75C135 45 105 15 75 15Z" fill="#117598"/>
        </svg>
      </div> */}
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl p-6 lg:p-8">
          {/* Header */}
          <h1 className="text-2xl lg:text-3xl font-bold text-black text-center mb-2">
            {booking.title}
          </h1>
          <h2 className="text-lg! text-center font-bold text-black mb-6">
            {booking.subtitle}
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column - Calendar, Scheduling Summary, and Notification */}
            <div className="flex flex-col">
              {/* Month Navigation */}
              <div className="flex items-center justify-between mb-4">
                <button
                  onClick={handlePrevMonth}
                  className="text-gray-600 hover:text-gray-900 transition-colors p-1"
                  aria-label="Previous month"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <h3 className="text-base font-bold text-black">
                  {monthNames[currentMonth]} {currentYear}
                </h3>
                <button
                  onClick={handleNextMonth}
                  className="text-gray-600 hover:text-gray-900 transition-colors p-1"
                  aria-label="Next month"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              
              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-1.5 mb-4">
                {/* Day headers */}
                {dayNames.map((day) => (
                  <div
                    key={day}
                    className="text-center text-xs font-medium text-gray-600 py-1.5"
                  >
                    {day}
                  </div>
                ))}
                
                {/* Calendar days */}
                {calendarDays.map((dayInfo, index) => {
                  const isSelected = dayInfo.isCurrentMonth && dayInfo.day === selectedDate;
                  
                  return (
                    <button
                      key={`${dayInfo.isCurrentMonth ? 'current' : 'other'}-${dayInfo.day}-${index}`}
                      onClick={() => {
                        if (dayInfo.isCurrentMonth) {
                          setSelectedDate(dayInfo.day);
                        }
                      }}
                      disabled={!dayInfo.isCurrentMonth}
                      className={`
                        aspect-square rounded-full text-xs font-medium transition-all flex items-center justify-center
                        ${isSelected
                          ? "bg-[#A1C65D] text-white"
                          : dayInfo.isCurrentMonth
                          ? "text-gray-800 hover:bg-gray-100"
                          : "text-gray-300 cursor-not-allowed"
                        }
                      `}
                    >
                      {dayInfo.day}
                    </button>
                  );
                })}
              </div>
              
              {/* Scheduling Summary */}
              {selectedDate && selectedTime && (
                <div className="bg-[#A1C65D] rounded-lg p-4 text-white shadow-sm mb-3">
                  <h4 className="font-bold text-base mb-1">{booking.schedulingLabel}</h4>
                  <p className="text-sm">
                    {formatDate(selectedDate)} {formatTimeRange()}
                  </p>
                </div>
              )}
              
              {/* Notification Option */}
              <div className="bg-gray-800 rounded-lg p-4 text-white shadow-sm">
                <div className="flex items-center gap-3 mb-1">
                  <Bell className="w-5 h-5" />
                  <h4 className="font-bold text-base">{booking.notificationLabel}</h4>
                </div>
                <p className="text-sm text-gray-300">{booking.notificationText}</p>
              </div>
            </div>
            
            {/* Right Column - Time Slots and Action Buttons */}
            <div className="flex flex-col">
              <h3 className="text-lg font-bold text-black mb-4">{booking.pickTimeLabel}</h3>
              <div className="space-y-2 flex-1 max-h-100 overflow-y-auto pr-2 mb-6">
                {timeSlots.map((slot) => {
                  const isSelected = selectedTime === slot.id;
                  
                  return (
                    <label
                      key={slot.id}
                      className={`
                        flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all
                        ${isSelected
                          ? "bg-[#117598] text-white shadow-sm"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }
                      `}
                    >
                      <input
                        type="radio"
                        name="timeSlot"
                        value={slot.id}
                        checked={isSelected}
                        onChange={() => setSelectedTime(slot.id)}
                        className="w-4 h-4 cursor-pointer accent-[#74C6D1]"
                      />
                      <span className={`text-sm font-medium ${isSelected ? "text-white" : "text-gray-700"}`}>
                        {slot.start} - {slot.end}
                      </span>
                    </label>
                  );
                })}
              </div>
              
              {/* Action Buttons */}
              <div className="flex items-end justify-end gap-4 mt-auto">
                <button
                  className="text-gray-700 hover:text-gray-900 font-medium transition-colors px-4 py-2"
                  onClick={() => {
                    // Handle back action
                    setSelectedDate(19);
                    setSelectedTime("09:00-09:15");
                  }}
                >
                  {booking.backButton}
                </button>
                <button
                  className={`
                    px-6 py-3 rounded-lg font-medium text-white transition-all shadow-sm
                    ${selectedDate && selectedTime
                      ? "bg-[#A1C65D]"
                      : "bg-gray-300 cursor-not-allowed"
                    }
                  `}
                  disabled={!selectedDate || !selectedTime}
                  onClick={() => {
                    // Handle next step action
                    if (selectedDate && selectedTime) {
                      router.push("/book-appointment");
                    }
                  }}
                >
                  {booking.nextStepButton}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
