import HorseSaddled from '../assets/horse-saddled.jpg'
import HorseTeaching from '../assets/horse-teaching.jpg'
import HorsesRainbow from '../assets/horses-rainbow.jpg'
import HorseTree from '../assets/horse-tree.jpg'
import TeachingRider from '../assets/teaching-rider.jpg'
import HorseWithFoal from '../assets/horse-with-foal.jpg'
import PoloPlayers from '../assets/polo-players.jpg'
import Field from '../assets/field.jpg'
import Horse from '../assets/horse.jpg'

// Every bookable experience, keyed by property. One record drives both the hub
// card and the full activity page, so the two can never drift apart.
//
// Body copy is placed verbatim from the client's notes — `teaser` is the
// opening sentence of the same copy, not a rewrite.
//
// `acuityUrl` is null everywhere until Acuity Scheduling is set up. Until then
// the booking panel falls back to Toby's phone and email rather than showing a
// dead widget. Drop the scheduler URL in and the embed appears automatically.

export const ACTIVITIES = [
  // ---------------------------------------------------------------- Muddy Flatts
  {
    slug: 'lessons',
    property: 'muddy-flatts',
    title: 'Lessons',
    image: HorseSaddled,
    imageAlt: 'A horse being saddled before a lesson',
    bodyImage: HorseTeaching,
    bodyImageAlt: 'A rider being shown how to saddle a horse',
    teaser:
      'Ever wanted to try polo but thought that it was out of reach? Think again.',
    bookable: true,
    acuityUrl: null,
    paragraphs: [
      'Ever wanted to try polo but thought that it was out of reach? Think again. Start with a patient, experienced coach who will help you build a solid foundation for playing.',
      'Those who have never ridden a horse before are always welcome to join and learn. Riding is the cornerstone of polo, so much of the emphasis goes on becoming a partner with your horse. With personalised instruction, you’ll build the skills and confidence to thrive both in the saddle and on the field.',
    ],
  },
  {
    slug: 'academy',
    property: 'muddy-flatts',
    title: 'Academy',
    image: TeachingRider,
    imageAlt: 'A rider being shown how to saddle a horse',
    bodyImage: PoloPlayers,
    bodyImageAlt: 'Players lining up during a chukka',
    teaser:
      'Learn how to play amongst a welcoming and supportive community of like-minded players.',
    bookable: true,
    acuityUrl: null,
    paragraphs: [
      'Learn how to play amongst a welcoming and supportive community of like-minded players. The semi-competitive format eases beginners into the sport. The session is led by two coaches on opposing teams who facilitate an open and flowing game whilst maintaining the rules of play.',
      'They will coach as you play, which offers an experiential learning approach. The more experienced players are able to develop their competitive skills, while the newer players are allowed to have free hits at the ball and enjoy becoming more comfortable in a game environment.',
    ],
  },

  // ------------------------------------------------------------------ Tarlo Hill
  {
    slug: 'trail-riding',
    property: 'tarlo-hill',
    title: 'Trail Riding Through the Australian Countryside',
    shortTitle: 'Trail Riding',
    image: HorsesRainbow,
    imageAlt: 'Horses grazing beneath a rainbow at Tarlo Hill',
    bodyImage: Field,
    bodyImageAlt: 'Open country and long grass on the ride out',
    teaser: 'Our trail rides are the heart of the Tarlo Hill experience.',
    bookable: true,
    acuityUrl: null,
    paragraphs: [
      'Our trail rides are the heart of the Tarlo Hill experience. Guided by experienced horsemen and mounted on calm, reliable horses, you will explore the scenic and peaceful landscape of rural New South Wales at a relaxed pace.',
      'These rides are not about rushing from one point to another. They are an opportunity to slow down, breathe in the fresh country air and reconnect with nature. As you ride through open paddocks, along gentle tracks and across working farmland, you will gain a sense of the vastness and beauty of the Australian bush.',
      'For many guests, the trail ride is also a journey into Australia’s pastoral history. Before modern machinery, stockmen spent their lives on horseback managing sheep and cattle across enormous properties. Australians often speak of the era when the nation “rode on the sheep’s back,” and riding through this landscape gives a glimpse of what that life may have felt like.',
    ],
    pullquote:
      'If you have watched Yellowstone and admired the cowboy lifestyle, you will recognise a familiar spirit here. Australia has its own version of the cowboy: the stockman. Tough, skilled and deeply connected to the land, stockmen are an iconic part of Australian culture, and our trail rides offer a small taste of that tradition.',
  },
  {
    slug: 'jumping',
    property: 'tarlo-hill',
    title: 'Jumping on Our Sanded Grass Arena',
    shortTitle: 'Jumping',
    // Stand-in photography: Figma calls for a jumping shot, which the asset
    // library does not yet contain.
    image: HorseTree,
    imageAlt: 'A horse tethered beneath a tree at Tarlo Hill',
    bodyImage: Horse,
    bodyImageAlt: 'A horse grazing in long grass at Tarlo Hill',
    teaser:
      'For riders who enjoy a more technical challenge, Tarlo Hill offers jumping sessions on our beautifully maintained sanded grass field.',
    bookable: true,
    acuityUrl: null,
    paragraphs: [
      'For riders who enjoy a more technical challenge, Tarlo Hill offers jumping sessions on our beautifully maintained sanded grass field. The surface provides excellent footing and is designed to be both comfortable for the horses and enjoyable for riders.',
      'We have a dedicated jumping coach available for private or small-group instruction. Whether you are learning your first cross-rail or refining your position and rhythm over a course of fences, lessons are tailored to your experience level and goals.',
      'The emphasis is always on confidence, correct technique and having fun in a relaxed country setting.',
    ],
  },
  {
    slug: 'polo',
    property: 'tarlo-hill',
    title: 'Polo Lessons & Beginner Games',
    shortTitle: 'Polo Lessons',
    image: PoloPlayers,
    imageAlt: 'Riders on the field during a coached session',
    bodyImage: TeachingRider,
    bodyImageAlt: 'Riders on the field during a coached session',
    teaser:
      'Tarlo Hill is the perfect place to discover the sport of kings in a welcoming and approachable environment.',
    bookable: true,
    acuityUrl: null,
    paragraphs: [
      'Tarlo Hill is the perfect place to discover the sport of kings in a welcoming and approachable environment. Our polo lessons introduce the fundamentals of riding for polo, stick-and-ball skills and the basic rules of the game.',
      'For those ready to take the next step, we run beginner polo games where new players can experience the excitement of playing with teammates under the guidance of a coach. These games are designed specifically for learners, with an emphasis on safety, understanding the game and enjoying the experience rather than competition.',
      'Because all of our horses have been bred and trained by us, we are able to provide mounts that are quiet, responsive and well suited to riders who are new to polo.',
    ],
  },
  {
    slug: 'training-breeding',
    property: 'tarlo-hill',
    title: 'Training & Breeding',
    image: HorseWithFoal,
    imageAlt: 'A mare and her foal in the paddock at Tarlo Hill',
    bodyImage: HorseTree,
    bodyImageAlt: 'A horse tethered beneath a tree at Tarlo Hill',
    // This is the longest copy of any activity, so a second image carries the
    // lower half of the left column rather than leaving it empty
    extraImage: HorsesRainbow,
    extraImageAlt: 'Mares and young stock grazing in the paddocks at Tarlo Hill',
    teaser: 'Great horses aren’t found. They’re developed.',
    // Informational, not bookable — Figma's Training & Breeding frame is
    // explicitly labelled "no booking on this page".
    bookable: false,
    acuityUrl: null,
    paragraphs: [
      'Great horses aren’t found. They’re developed.',
      'At Tarlo Hill Equestrian Club, every horse has been bred, raised and trained on our property. From their very first days through to their education under saddle, we know each horse’s personality, strengths and potential.',
      'This lifelong approach allows us to match every rider with the right horse, whether you’re climbing into the saddle for the first time, learning to play polo, or developing your skills as an experienced rider.',
      'Our breeding program combines proven Australian and New Zealand bloodlines, including genetics from the renowned Ellerston Polo program. The result is an athletic, intelligent horse with the calm temperament and trainability that make learning enjoyable and rewarding.',
      'We believe a great lesson starts with a great horse. That’s why our horses are selected not only for their athletic ability, but for their quiet nature, willingness and reliability. They are forgiving enough to build confidence in beginners, while remaining responsive and capable for more advanced riders.',
      'Because we have bred and trained every horse ourselves, we understand them better than anyone. That knowledge allows us to carefully pair horse and rider, creating a safe, enjoyable experience and giving every guest the confidence to progress at their own pace.',
    ],
    pullquote:
      'Our horses are more than lesson horses. They are the foundation of everything we do.',
  },
]

export const activitiesFor = (property) => ACTIVITIES.filter((a) => a.property === property)

export const findActivity = (property, slug) =>
  ACTIVITIES.find((a) => a.property === property && a.slug === slug)
