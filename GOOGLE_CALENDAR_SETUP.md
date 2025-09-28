# Google Calendar Setup Instructions

## 🗓️ How to Connect Your Google Calendar

The booking system is now ready to display your Google Calendar! Follow these steps to set it up:

### Step 1: Create or Use Existing Google Calendar

1. Go to [Google Calendar](https://calendar.google.com)
2. Create a new calendar specifically for van rentals:
   - Click the "+" next to "Other calendars"
   - Choose "Create new calendar"
   - Name it "LT35 Pakettiauto Varaukset" or similar
   - Set timezone to "Europe/Helsinki"

### Step 2: Make Calendar Public

1. In Google Calendar, find your calendar in the left sidebar
2. Click the three dots next to the calendar name
3. Select "Settings and sharing"
4. Scroll down to "Access permissions for events"
5. Check "Make available to public"
6. Set visibility to "See all event details"

### Step 3: Get Calendar ID

1. Still in "Settings and sharing"
2. Scroll down to "Integrate calendar"
3. Copy the "Calendar ID" (looks like: `abc123@gmail.com` or longer)

### Step 4: Update the Website

1. Open `src/components/BookingCalendar/BookingCalendar.tsx`
2. Find line 134 with the iframe src
3. Replace `YOUR_CALENDAR_ID@gmail.com` with your actual Calendar ID

```javascript
// Before:
src="https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23ffffff&ctz=Europe%2FHelsinki&src=YOUR_CALENDAR_ID%40gmail.com&color=%23039BE5..."

// After (example):
src="https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23ffffff&ctz=Europe%2FHelsinki&src=matti.vuokraus%40gmail.com&color=%23039BE5..."
```

### Step 5: Test the Integration

1. Run `npm run build` to build the website
2. Push changes to GitHub
3. Check that the calendar appears on your website
4. Test by adding a test event to your calendar

## 📋 How to Use the Calendar

### Adding Rental Bookings

1. When someone books the van, add an event to your calendar:
   - **Title**: "LT35 varattu - [Customer Name]"
   - **Time**: Full rental period
   - **Description**: Contact info, pickup details, etc.

### Calendar Color Coding (Optional)

You can use different colors for different types of bookings:
- 🔴 Red: Confirmed bookings
- 🟡 Yellow: Pending confirmations
- 🔵 Blue: Maintenance/unavailable
- 🟢 Green: Available but noted

### Privacy Tips

- Only put first names in calendar titles for privacy
- Keep customer details in the description (won't show publicly)
- Consider using codes instead of full names

## 🔧 Advanced Customization

You can customize the calendar appearance by modifying the iframe URL parameters:

- `&mode=MONTH` - Month view (default)
- `&mode=WEEK` - Week view
- `&mode=AGENDA` - List view
- `&showCalendars=0` - Hide calendar list
- `&showTabs=0` - Hide tabs
- `&color=%23039BE5` - Calendar color (hex code)

## 🆘 Troubleshooting

**Calendar not showing?**
- Check that calendar is set to public
- Verify the Calendar ID is correct
- Make sure there are no special characters in the URL

**Events not appearing?**
- Refresh the page (calendars can take a few minutes to sync)
- Check browser console for errors
- Verify calendar timezone is set to Europe/Helsinki

**Mobile issues?**
- The calendar is responsive and should work on all devices
- If there are issues, users can always call/WhatsApp instead

## 📱 Alternative: Google Calendar App Link

Instead of embedding, you can also link directly to your calendar:

```
https://calendar.google.com/calendar/u/0?cid=YOUR_CALENDAR_ID
```

This opens the calendar in the Google Calendar app or browser.

---

Need help? The current setup allows users to see your availability and then contact you to confirm bookings - perfect for a personal rental business!