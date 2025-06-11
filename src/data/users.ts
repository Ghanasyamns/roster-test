interface User {
  id: string;
  profile: Profile;
  profile_summary: string;
  createdAt?: Date;
  experience: Experience[];
}
interface Profile {
  name: string;
  image: string;
  designation: string;
  location: string;
}
interface Experience {
  id: string;
  employer_name?: string;
  subscriber_count?: string;
  job_title: string;
  job_type: EmploymentType;
  no_of_projects?: number;
  job_summary: string;
  job_duration_start: string;
  job_duration_end: string;
  projects?: Project[];
}
interface Project {
  thumbnail: string;
  title: string;
  video_url: string;
  job_role: string;
}
type EmploymentType = "Full Time" | "Contract";
const users: User[] = [
  {
    id: "sam",
    profile: {
      name: "Sam Doe",
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      designation: "Video Editor",
      location: "Los Angeles, United States",
    },
    profile_summary:
      "For the past 12 years, I have assisted creators in gaining over 35 million subscribers and hundreds of millions of views. Since 2024, I have also taken on roles that focus on creative direction and ideation. I am seeking a long-term, full-time job where I can grow and thrive.",
    experience: [
      {
        id: "1",
        employer_name: "Tech Insights Channel",
        subscriber_count: "850K",
        job_title: "Motion Graphics Artist",
        job_type: "Full Time",
        no_of_projects: 8,
        job_duration_start: "11 January 2023",
        job_duration_end: "16 January 2023",
        job_summary:
          "Created engaging motion graphics and animated intros/outros for weekly tech review videos, significantly enhancing visual appeal and viewer retention.",
        projects: [
          {
            thumbnail:
              "https://images.unsplash.com/photo-1604073384303-89a7c7af82b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dW5ib3h8ZW58MHx8MHx8fDA%3D",
            title: "Unboxing the Latest Smartphone: Animated Reveal",
            video_url: "Unboxing the Latest Smartphone: Animated Reveal",
            job_role: "Motion Graphics Artist",
          },
          {
            thumbnail:
              "https://images.unsplash.com/photo-1604073384303-89a7c7af82b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dW5ib3h8ZW58MHx8MHx8fDA%3D",
            title: "Understanding AI: Explainer Animation Series",
            video_url: "Understanding AI: Explainer Animation Series",
            job_role: "Motion Graphics Artist, Storyboarder",
          },
          {
            thumbnail:
              "https://images.unsplash.com/photo-1604073384303-89a7c7af82b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dW5ib3h8ZW58MHx8MHx8fDA%3D",
            title: "Future of Gaming: Infographic Animation",
            video_url: "Future of Gaming: Infographic Animation",
            job_role: "Motion Graphics Artist",
          },
        ],
      },
      {
        id: "2",
        employer_name: "Daniel Doe",
        subscriber_count: "1.2M",
        job_title: "Video Editor",
        job_type: "Contract",
        no_of_projects: 5,
        job_duration_start: "Jan 2023",
        job_duration_end: "Sep 2024",
        job_summary:
          "I worked with Daniel on a one-time project as a thumbnail designer for his interview with Ryan Tedder.",
        projects: [
          {
            thumbnail:
              "https://plus.unsplash.com/premium_photo-1720503226523-dc08be93aae9?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title:
              "Why OneRepublic Told Their Label It’s Too Late To Apologize",
            video_url:
              "Why OneRepublic Told Their Label It’s Too Late To Apologize",
            job_role: "Video Editor",
          },
        ],
      },
    ],
  },
  {
    id: "jane",
    profile: {
      name: "Jane Smith",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=3222&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      designation: "Content Creator",
      location: "New York, United States",
    },
    profile_summary:
      "A passionate content creator with 8 years of experience in digital storytelling. Specializing in lifestyle vlogs and short-form educational content, I've helped channels grow by 150% in viewership and engagement. I'm looking for collaborative projects that challenge creative boundaries.",
    experience: [
      {
        id: "1",
        employer_name: "Digital Trends",
        subscriber_count: "500K",
        job_title: "Lead Content Producer",
        job_type: "Contract",
        no_of_projects: 12,
        job_duration_start: "Jan 2023",
        job_duration_end: "Sep 2024",
        job_summary:
          "Managed end-to-end content production for daily vlogs and sponsored segments, increasing subscriber engagement by 25% over two years.",
        projects: [
          {
            thumbnail:
              "https://images.unsplash.com/photo-1649180543887-158357417159?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHlvdXR1YmUlMjB0aHVtYm5haWxzfGVufDB8fDB8fHww",
            title: "Exploring the Hidden Gems of NYC",
            video_url: "Exploring the Hidden Gems of NYC",
            job_role: "Director, Editor",
          },
          {
            thumbnail:
              "https://images.unsplash.com/photo-1542435503-956c469947f6?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Mastering Your Productivity: A Guide",
            video_url: "Mastering Your Productivity: A Guide",
            job_role: "Content Strategist",
          },
        ],
      },
      {
        id: "2",
        employer_name: "Digital Storytellers Inc.",
        subscriber_count: "2.5M",
        job_title: "Senior Video Editor",
        job_type: "Full Time",
        no_of_projects: 15,
        job_duration_start: "Jan 2023",
        job_duration_end: "Sep 2024",
        job_summary:
          "Led post-production for high-profile documentary series and brand collaborations, achieving a 30% increase in viewership for key projects.",
        projects: [
          {
            thumbnail:
              "https://images.unsplash.com/photo-1649180543887-158357417159?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHlvdXR1YmUlMjB0aHVtYm5haWxzfGVufDB8fDB8fHww",
            title: "Echoes of the Past: A Historical Documentary",
            video_url: "Echoes of the Past: A Historical Documentary",
            job_role: "Lead Editor",
          },
          {
            thumbnail:
              "https://images.unsplash.com/photo-1649180543887-158357417159?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHlvdXR1YmUlMjB0aHVtYm5haWxzfGVufDB8fDB8fHww",
            title: "Innovate & Create: Tech Startup Showcase",
            video_url: "Innovate & Create: Tech Startup Showcase",
            job_role: "Senior Video Editor",
          },
          {
            thumbnail:
              "https://images.unsplash.com/photo-1649180543887-158357417159?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHlvdXR1YmUlMjB0aHVtYm5haWxzfGVufDB8fDB8fHww",
            title: "The Art of Culinary: A Masterclass Series",
            video_url: "The Art of Culinary: A Masterclass Series",
            job_role: "Editor, Colorist",
          },
        ],
      },
      {
        id: "3",
        employer_name: "Global News Network",
        subscriber_count: "10M+",
        job_title: "Broadcast Journalist & Editor",
        job_type: "Contract",
        no_of_projects: 25,
        job_duration_start: "Jan 2023",
        job_duration_end: "Sep 2024",
        job_summary:
          "Responsible for editing news segments, interviews, and special reports for national broadcast, ensuring timely and accurate delivery.",
        projects: [
          {
            thumbnail:
              "https://images.unsplash.com/photo-1649180543887-158357417159?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHlvdXR1YmUlMjB0aHVtYm5haWxzfGVufDB8fDB8fHww",
            title: "Election Night Coverage: Live Broadcast",
            video_url: "Election Night Coverage: Live Broadcast",
            job_role: "Broadcast Editor",
          },
          {
            thumbnail:
              "https://images.unsplash.com/photo-1649180543887-158357417159?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHlvdXR1YmUlMjB0aHVtYm5haWxzfGVufDB8fDB8fHww",
            title: "Investigative Report: Environmental Impact",
            video_url: "Investigative Report: Environmental Impact",
            job_role: "Editor, Researcher",
          },
          {
            thumbnail:
              "https://images.unsplash.com/photo-1649180543887-158357417159?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHlvdXR1YmUlMjB0aHVtYm5haWxzfGVufDB8fDB8fHww",
            title: "Global Economic Outlook: Expert Panel",
            video_url: "Global Economic Outlook: Expert Panel",
            job_role: "Video Editor",
          },
        ],
      },
    ],
  },
  {
    id: "alex",
    profile: {
      name: "Alex Johnson",
      image:
        "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
      designation: "Graphic Designer",
      location: "London, United Kingdom",
    },
    profile_summary:
      "Creative graphic designer with 10 years of experience in branding and visual communication. I specialize in crafting compelling visual narratives for digital platforms and print media, with a proven track record of increasing brand recognition by 40%. Seeking innovative design challenges.",
    experience: [
      {
        id: "1",
        employer_name: "Creative Minds Agency",
        subscriber_count: "N/A",
        job_title: "Senior Graphic Designer",
        job_type: "Full Time",
        no_of_projects: 20,
        job_duration_start: "Jan 2023",
        job_duration_end: "Sep 2024",
        job_summary:
          "Led design projects from concept to completion, including logo design, marketing collateral, and social media graphics for diverse clients.",
        projects: [
          {
            thumbnail:
              "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Brand Identity Redesign: Eco-Friendly Startup",
            video_url: "N/A",
            job_role: "Lead Designer",
          },
          {
            thumbnail:
              "https://images.unsplash.com/photo-1557838923-2985c318be48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlnaXRhbCUyMG1hcmtldGluZ3xlbnwwfHwwfHx8MA%3D%3D",
            title: "Digital Marketing Campaign: Fitness App",
            video_url: "N/A",
            job_role: "Graphic Designer",
          },
        ],
      },
    ],
  },
];

export {
  users,
  type User,
  type Profile,
  type Experience,
  type Project,
  type EmploymentType,
};
