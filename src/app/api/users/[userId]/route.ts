import { User, users } from "@/data/users";
import { NextRequest, NextResponse } from "next/server";

// Type definitions

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

// Mock user data - replace with your actual data source

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ userId: string }> }
): Promise<NextResponse<ApiResponse<User>>> {
  try {
    const { userId } = await params;

    // Validate userId
    if (!userId || typeof userId !== "string") {
      return NextResponse.json(
        {
          success: false,
          error: "User ID is required and must be a string",
        },
        { status: 400 }
      );
    }

    // Validate userId format (optional - add your own validation logic)
    if (userId.trim().length === 0) {
      return NextResponse.json(
        {
          success: false,
          error: "User ID cannot be empty",
        },
        { status: 400 }
      );
    }

    // Find user by ID
    const user = users.find((u) => u.id === userId);

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          error: "User not found",
        },
        { status: 404 }
      );
    }

    // Return user data
    return NextResponse.json({
      success: true,
      data: user,
    });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Internal server error",
      },
      { status: 500 }
    );
  }
}

// add new expericence

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ userId: string }> }
): Promise<NextResponse<ApiResponse<User>>> {
  try {
    const { userId } = await params;
    const body = await request.json();
    const newExperience = body;

    // Validate userId
    if (!userId || typeof userId !== "string") {
      return NextResponse.json(
        {
          success: false,
          error: "User ID is required and must be a string",
        },
        { status: 400 }
      );
    }

    // Validate userId format (optional - add your own validation logic)
    if (userId.trim().length === 0) {
      return NextResponse.json(
        {
          success: false,
          error: "User ID cannot be empty",
        },
        { status: 400 }
      );
    }

    // Validate new experience
    if (!newExperience || typeof newExperience !== "object") {
      return NextResponse.json(
        {
          success: false,
          error: "Experience is required and must be an object",
        },
        { status: 400 }
      );
    }

    // Find user by ID
    const user = users.find((u) => u.id === userId);

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          error: "User not found",
        },
        { status: 404 }
      );
    }

    // Add new experience to user's experiences
    user.experience.push(newExperience);

    // Return updated user data
    return NextResponse.json({
      success: true,
      data: user,
    });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Internal server error",
      },
      { status: 500 }
    );
  }
}
//  update expericence based on id

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ userId: string }> }
): Promise<NextResponse<ApiResponse<User>>> {
  try {
    const { userId } = await params;
    const body = await request.json();
    const updatedExperience = body;

    // Validate userId
    if (!userId || typeof userId !== "string") {
      return NextResponse.json(
        {
          success: false,
          error: "User ID is required and must be a string",
        },
        { status: 400 }
      );
    }

    // Validate userId format (optional - add your own validation logic)
    if (userId.trim().length === 0) {
      return NextResponse.json(
        {
          success: false,
          error: "User ID cannot be empty",
        },
        { status: 400 }
      );
    }

    // Validate updated experience
    if (!updatedExperience || typeof updatedExperience !== "object") {
      return NextResponse.json(
        {
          success: false,
          error: "Experience is required and must be an object",
        },
        { status: 400 }
      );
    }

    // Find user by ID
    const user = users.find((u) => u.id === userId);

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          error: "User not found",
        },
        { status: 404 }
      );
    }

    // Find experience to update
    const experienceIndex = user.experience.findIndex(
      (exp) => exp.id === updatedExperience.id
    );

    if (experienceIndex === -1) {
      return NextResponse.json(
        {
          success: false,
          error: "Experience not found",
        },
        { status: 404 }
      );
    }

    // Update experience
    user.experience[experienceIndex] = updatedExperience;

    // Return updated user data
    return NextResponse.json({
      success: true,
      data: user,
    });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Internal server error",
      },
      { status: 500 }
    );
  }
}
