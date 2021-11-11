# The Problem

## Birthday Image

**OVERVIEW:** Your birthday is so special NASA might have taken a photo of you on it!* *well ok they took a photo of the earth... you may be in it... somewhere...

Your challenge is to get a photo of the earth from the day of a user’s last birthday. Sadly, NASA doesn’t take photos every day, so if there is no photo available for a given date, you’ll need to grab an image from the closest date after.

**Examples:**

It is now November 2018.

Your birthday is 07/07/1987 (July)
You should get the image for date 07/07/2018 (or closest to that date)

Your birthday is 12/21/1987 (December)
You should get the image for 12/21/2017 (or closest to that date)

**API DOCUMENTATION:**

You’ll want to use the API endpoint noted at https://api.nasa.gov/api.html#EPIC - however full documentation can be found at https://epic.gsfc.nasa.gov/about/api .
SPECS: The API docs should have all the info you need. You can make requests for free without registering up to a certain limit, or create a free API key should you think you’ll go over.

- UI is not as important here – just make it usable.
- Use whatever stack or framework you are comfortable with – or even vanilla JS :)
- CORS could be an issue – use whichever strategy you see fit to get around that.
- Use any 3rd party libraries you feel are appropriate.
- Users should enter a date on a landing page, and hit a “submit” button which will request
data from the NASA EPIC API.
- If the NASA EPIC API has no data available for that date, use the closest date after the
inputted date.
- The resulting screen should show an image of the earth on the given day, and ideally
highlight if this is the user’s actual given date (bearthday!) or if it is the closest date
match.
- If there are multiple images available for a given date (there may be!) you can use the
first one.

● This shouldn’t take you more than 2 hours.
🌎🎂 🎂🌎

**BONUS:**

- If there is more than one image available for a given date, create a simple slider of the images.
- Write some tests using a framework/strategy of your choosing

# The Solution

The solution has been developed using Next.js, Typescript and TailwindCSS.

## Local installation

1. Clone the repo

2. Install dependencies running:

```
npm i
```

or

```
yarn
```

3. Run the demo

```
npm run dev
```

or

```
yarn dev
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
