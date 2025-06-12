// "use client";
// import { Button } from "@/components/ui/button";
// import { DatePicker } from "@/components/ui/datePicker";
// import {
//   Dialog,
//   DialogClose,
//   DialogContent,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Textarea } from "@/components/ui/textarea";
// import { Experience } from "@/data/types/users";
// import { useState } from "react";

// interface ExperienceFormProps {
//   mode: "add" | "edit";
//   experience?: Experience;
//   onSubmit: (experience: Experience) => void;
//   triggerButton?: React.ReactNode;
// }

// function ExperienceForm({
//   mode,
//   experience,
//   onSubmit,
//   triggerButton,
// }: ExperienceFormProps) {
//   const [open, setOpen] = useState(false);
//   const [formData, setFormData] = useState<Experience>(
//     experience ?? {
//       id: Date.now().toString(),
//       employer_name: "Mr. Beast",
//       job_title: "",
//       job_type: "Full Time",
//       job_summary: "",
//       job_duration_start: "",
//       job_duration_end: "",
//       projects: [],
//       no_of_projects: 3,
//       subscriber_count: "20M",
//     }
//   );
//   const [errors, setErrors] = useState<
//     Partial<Record<keyof Experience, string>>
//   >({});

//   const validateForm = (): boolean => {
//     const newErrors: Partial<Record<keyof Experience, string>> = {};

//     if (!formData.job_title.trim()) {
//       newErrors.job_title = "Job title is required";
//     }
//     if (!formData.job_duration_start) {
//       newErrors.job_duration_start = "Start date is required";
//     }
//     if (!formData.job_duration_end) {
//       newErrors.job_duration_end = "End date is required";
//     }
//     if (!formData.job_type) {
//       newErrors.job_type = "Employment type is required";
//     }
//     if (!formData.job_summary.trim()) {
//       newErrors.job_summary = "Job summary is required";
//     }

//     // Date validation
//     if (formData.job_duration_start && formData.job_duration_end) {
//       const fromDate = new Date(formData.job_duration_start);
//       const toDate = new Date(formData.job_duration_end);
//       if (fromDate > toDate) {
//         newErrors.job_duration_end = "End date must be after start date";
//       }
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!validateForm()) {
//       return;
//     }

//     const experienceData: Experience = {
//       ...formData,
//       ...(experience?.id && { id: experience.id }),
//     };

//     onSubmit(experienceData);

//     // Reset form if adding new experience
//     if (mode === "add") {
//       setFormData({
//         id: Date.now().toString(),
//         employer_name: "Mr. Beast",
//         job_title: "",
//         job_type: "Full Time",
//         job_summary: "",
//         job_duration_start: "",
//         job_duration_end: "",
//         projects: [],
//         no_of_projects: 3,
//         subscriber_count: "20M",
//       });
//     }

//     setErrors({});
//     setOpen(false);
//   };

//   const handleInputChange = (field: keyof Experience, value: string) => {
//     setFormData((prev) => ({ ...prev, [field]: value }));
//     // Clear error when user starts typing
//     if (errors[field]) {
//       setErrors((prev) => ({ ...prev, [field]: undefined }));
//     }
//   };

//   const defaultTrigger = (
//     <Button variant="default">
//       {mode === "add" ? "Add Experience" : "Edit Experience"}
//     </Button>
//   );

//   return (
//     <Dialog open={open} onOpenChange={setOpen}>
//       <DialogTrigger asChild>{triggerButton || defaultTrigger}</DialogTrigger>
//       <DialogContent className="sm:max-w-[425px]">
//         <form onSubmit={handleSubmit}>
//           <DialogHeader>
//             <DialogTitle>
//               {mode === "add" ? "Add Experience" : "Edit Experience"}
//             </DialogTitle>
//           </DialogHeader>
//           <div className="grid gap-4 py-4">
//             <div className="grid gap-3">
//               <Label htmlFor="job-title">Job title *</Label>
//               <Input
//                 id="job-title"
//                 name="job_title"
//                 value={formData.job_title}
//                 onChange={(e) => handleInputChange("job_title", e.target.value)}
//                 className={errors.job_title ? "border-red-500" : ""}
//               />
//               {errors.job_title && (
//                 <span className="text-sm text-red-500">{errors.job_title}</span>
//               )}
//             </div>

//             <div className="grid gap-3">
//               <Label htmlFor="date">Duration of employment *</Label>
//               <div className="grid grid-cols-2 gap-3">
//                 <div>
//                   <DatePicker
//                     label="From"
//                     selected={
//                       formData.job_duration_start
//                         ? new Date(formData.job_duration_start)
//                         : undefined
//                     }
//                     onDateChange={(date) =>
//                       handleInputChange(
//                         "job_duration_start",
//                         date?.toDateString() || ""
//                       )
//                     }
//                   />
//                   {errors.job_duration_start && (
//                     <span className="text-sm text-red-500">
//                       {errors.job_duration_start}
//                     </span>
//                   )}
//                 </div>
//                 <div>
//                   <DatePicker
//                     label="To"
//                     selected={
//                       formData.job_duration_end
//                         ? new Date(formData.job_duration_end)
//                         : undefined
//                     }
//                     onDateChange={(date) =>
//                       handleInputChange(
//                         "job_duration_end",
//                         date?.toDateString() || ""
//                       )
//                     }
//                   />
//                   {errors.job_duration_end && (
//                     <span className="text-sm text-red-500">
//                       {errors.job_duration_end}
//                     </span>
//                   )}
//                 </div>
//               </div>
//             </div>

//             <div className="grid gap-3">
//               <Label htmlFor="job_type">Type of employment *</Label>
//               <Select
//                 value={formData.job_type}
//                 onValueChange={(value) => handleInputChange("job_type", value)}
//               >
//                 <SelectTrigger
//                   className={`w-full ${
//                     errors.job_type ? "border-red-500" : ""
//                   }`}
//                 >
//                   <SelectValue placeholder="Select type" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectGroup>
//                     {["Full Time", "Contract"].map((value) => (
//                       <SelectItem key={value} value={value}>
//                         {value}
//                       </SelectItem>
//                     ))}
//                   </SelectGroup>
//                 </SelectContent>
//               </Select>
//               {errors.job_type && (
//                 <span className="text-sm text-red-500">{errors.job_type}</span>
//               )}
//             </div>

//             <div className="grid gap-3">
//               <Label htmlFor="job_summary">Contribution in the role *</Label>
//               <Textarea
//                 id="job_summary"
//                 name="job_summary"
//                 rows={4}
//                 value={formData.job_summary}
//                 onChange={(e) =>
//                   handleInputChange("job_summary", e.target.value)
//                 }
//                 className={errors.job_summary ? "border-red-500" : ""}
//                 placeholder="Describe your key contributions and achievements..."
//               />
//               {errors.job_summary && (
//                 <span className="text-sm text-red-500">
//                   {errors.job_summary}
//                 </span>
//               )}
//             </div>
//           </div>

//           <DialogFooter>
//             <DialogClose asChild>
//               <Button type="button" variant="outline">
//                 Cancel
//               </Button>
//             </DialogClose>
//             <Button type="submit">
//               {mode === "add" ? "Add Experience" : "Save Changes"}
//             </Button>
//           </DialogFooter>
//         </form>
//       </DialogContent>
//     </Dialog>
//   );
// }

// export default ExperienceForm;

"use client";
import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/ui/datePicker";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { EmploymentType, Experience } from "@/data/types/users";
import { useState, useCallback, useMemo } from "react";

interface ExperienceFormProps {
  mode: "add" | "edit";
  experience?: Experience;
  onSubmit: (experience: Experience) => void;
  triggerButton?: React.ReactNode;
}

// Constants
const EMPLOYMENT_TYPES: EmploymentType[] = ["Full Time", "Contract"] as const;

const INITIAL_FORM_STATE: Omit<Experience, "id"> = {
  employer_name: "",
  job_title: "",
  job_type: "Full Time",
  job_summary: "",
  job_duration_start: "",
  job_duration_end: "",
  projects: [],
  no_of_projects: 0,
  subscriber_count: "0",
};

// Utility functions
const generateId = (): string =>
  `exp_${Date.now()}_${Math.random().toString(36).slice(2, 11)}`;

const parseDateFromInput = (dateString: string): string => {
  if (!dateString) return "";
  return new Date(dateString).toISOString();
};

// Validation schema
const validateExperience = (
  data: Experience
): Partial<Record<keyof Experience, string>> => {
  const errors: Partial<Record<keyof Experience, string>> = {};

  // Required field validations
  if (!data.employer_name?.trim()) {
    errors.employer_name = "Company name is required";
  }

  if (!data.job_title?.trim()) {
    errors.job_title = "Job title is required";
  }

  if (!data.job_duration_start) {
    errors.job_duration_start = "Start date is required";
  }

  if (!data.job_duration_end) {
    errors.job_duration_end = "End date is required";
  }

  if (!data.job_type) {
    errors.job_type = "Employment type is required";
  }

  if (!data.job_summary?.trim()) {
    errors.job_summary = "Job summary is required";
  } else if (data.job_summary.trim().length < 30) {
    errors.job_summary = "Job summary must be at least 50 characters";
  }

  // Date validation
  if (data.job_duration_start && data.job_duration_end) {
    const startDate = new Date(data.job_duration_start);
    const endDate = new Date(data.job_duration_end);

    if (startDate >= endDate) {
      errors.job_duration_end = "End date must be after start date";
    }

    // Check if start date is not in the future
    if (startDate > new Date()) {
      errors.job_duration_start = "Start date cannot be in the future";
    }
  }

  return errors;
};

function ExperienceForm({
  mode,
  experience,
  onSubmit,
  triggerButton,
}: ExperienceFormProps) {
  const [open, setOpen] = useState(false);

  // Initialize form data
  const initialFormData = useMemo(
    (): Experience => ({
      id: experience?.id || generateId(),
      ...INITIAL_FORM_STATE,
      ...experience,
    }),
    [experience]
  );

  const [formData, setFormData] = useState<Experience>(initialFormData);
  const [errors, setErrors] = useState<
    Partial<Record<keyof Experience, string>>
  >({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Reset form when dialog opens/closes or mode changes
  const resetForm = useCallback(() => {
    setFormData(initialFormData);
    setErrors({});
    setIsSubmitting(false);
  }, [initialFormData]);

  // Handle opening dialog
  const handleOpenChange = useCallback(
    (newOpen: boolean) => {
      setOpen(newOpen);
      if (newOpen) {
        resetForm();
      }
    },
    [resetForm]
  );

  // Generic input handler
  const handleInputChange = useCallback(
    (field: keyof Experience, value: any) => {
      setFormData((prev) => ({ ...prev, [field]: value }));

      // Clear error when user starts typing
      if (errors[field]) {
        setErrors((prev) => ({ ...prev, [field]: undefined }));
      }
    },
    [errors]
  );

  // Handle date changes
  const handleDateChange = useCallback(
    (
      field: "job_duration_start" | "job_duration_end",
      date: Date | undefined
    ) => {
      const dateValue = date ? parseDateFromInput(date.toISOString()) : "";
      handleInputChange(field, dateValue);
    },
    [handleInputChange]
  );

  // Handle form submission
  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      if (isSubmitting) return;

      setIsSubmitting(true);

      try {
        // Validate form
        const validationErrors = validateExperience(formData);

        if (Object.keys(validationErrors).length > 0) {
          setErrors(validationErrors);
          return;
        }

        // Submit the form
        await onSubmit(formData);

        // Close dialog and reset form
        setOpen(false);
        if (mode === "add") {
          resetForm();
        }
      } catch (error) {
        console.error("Error submitting experience:", error);
        // Handle submission error (you might want to show a toast or error message)
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData, isSubmitting, mode, onSubmit, resetForm]
  );

  // Render error message
  const renderError = (field: keyof Experience) => {
    return errors[field] ? (
      <span className="text-sm text-red-500 mt-1 block">{errors[field]}</span>
    ) : null;
  };

  // Default trigger button
  const defaultTrigger = (
    <Button variant="default" size="sm">
      {mode === "add" ? "Add Experience" : "Edit Experience"}
    </Button>
  );

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{triggerButton || defaultTrigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <form onSubmit={handleSubmit} noValidate>
          <DialogHeader>
            <DialogTitle>
              {mode === "add" ? "Add New Experience" : "Edit Experience"}
            </DialogTitle>
          </DialogHeader>

          <div className="grid gap-6 py-4">
            {/* Company Name */}
            <div className="grid gap-2">
              <Label htmlFor="employer_name" className="text-sm font-medium">
                Company Name *
              </Label>
              <Input
                id="employer_name"
                name="employer_name"
                value={formData.employer_name}
                onChange={(e) =>
                  handleInputChange("employer_name", e.target.value)
                }
                className={
                  errors.employer_name
                    ? "border-red-500 focus:border-red-500"
                    : ""
                }
                placeholder="Enter company name"
                disabled={isSubmitting}
              />
              {renderError("employer_name")}
            </div>

            {/* Job Title */}
            <div className="grid gap-2">
              <Label htmlFor="job_title" className="text-sm font-medium">
                Job Title *
              </Label>
              <Input
                id="job_title"
                name="job_title"
                value={formData.job_title}
                onChange={(e) => handleInputChange("job_title", e.target.value)}
                className={
                  errors.job_title ? "border-red-500 focus:border-red-500" : ""
                }
                placeholder="Enter job title"
                disabled={isSubmitting}
              />
              {renderError("job_title")}
            </div>

            {/* Employment Duration */}
            <div className="grid gap-2">
              <Label className="text-sm font-medium">
                Duration of Employment *
              </Label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label
                    htmlFor="start_date"
                    className="text-xs text-muted-foreground"
                  >
                    Start Date
                  </Label>
                  <DatePicker
                    id="start_date"
                    selected={
                      formData.job_duration_start
                        ? new Date(formData.job_duration_start)
                        : undefined
                    }
                    onDateChange={(date) =>
                      handleDateChange("job_duration_start", date)
                    }
                    // disabled={isSubmitting}
                    className={
                      errors.job_duration_start ? "border-red-500" : ""
                    }
                  />
                  {renderError("job_duration_start")}
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="end_date"
                    className="text-xs text-muted-foreground"
                  >
                    End Date
                  </Label>
                  <DatePicker
                    id="end_date"
                    selected={
                      formData.job_duration_end
                        ? new Date(formData.job_duration_end)
                        : undefined
                    }
                    onDateChange={(date) =>
                      handleDateChange("job_duration_end", date)
                    }
                    // disabled={isSubmitting}
                    className={errors.job_duration_end ? "border-red-500" : ""}
                  />
                  {renderError("job_duration_end")}
                </div>
              </div>
            </div>

            {/* Employment Type */}
            <div className="grid gap-2">
              <Label htmlFor="job_type" className="text-sm font-medium">
                Type of Employment *
              </Label>
              <Select
                value={formData.job_type}
                onValueChange={(value) => handleInputChange("job_type", value)}
                disabled={isSubmitting}
              >
                <SelectTrigger
                  className={`w-full ${
                    errors.job_type ? "border-red-500 focus:border-red-500" : ""
                  }`}
                >
                  <SelectValue placeholder="Select employment type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {EMPLOYMENT_TYPES.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              {renderError("job_type")}
            </div>

            {/* Job Summary */}
            <div className="grid gap-2">
              <Label htmlFor="job_summary" className="text-sm font-medium">
                Key Contributions & Achievements *
              </Label>
              <Textarea
                id="job_summary"
                name="job_summary"
                rows={4}
                value={formData.job_summary}
                onChange={(e) =>
                  handleInputChange("job_summary", e.target.value)
                }
                className={
                  errors.job_summary
                    ? "border-red-500 focus:border-red-500"
                    : ""
                }
                placeholder="Describe your key contributions, achievements, and impact in this role... (minimum 50 characters)"
                disabled={isSubmitting}
              />
              <div className="flex justify-between items-center">
                <div>{renderError("job_summary")}</div>
                <span className="text-xs text-muted-foreground">
                  {formData.job_summary.length}/500
                </span>
              </div>
            </div>

            {/* Additional Fields (optional) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="no_of_projects" className="text-sm font-medium">
                  Number of Projects
                </Label>
                <Input
                  id="no_of_projects"
                  type="number"
                  min="0"
                  value={formData.no_of_projects}
                  onChange={(e) =>
                    handleInputChange(
                      "no_of_projects",
                      parseInt(e.target.value) || 0
                    )
                  }
                  disabled={isSubmitting}
                  placeholder="0"
                />
              </div>
              <div className="grid gap-2">
                <Label
                  htmlFor="subscriber_count"
                  className="text-sm font-medium"
                >
                  Team/Audience Size
                </Label>
                <Input
                  id="subscriber_count"
                  value={formData.subscriber_count}
                  onChange={(e) =>
                    handleInputChange("subscriber_count", e.target.value)
                  }
                  disabled={isSubmitting}
                  placeholder="e.g., 20M"
                />
              </div>
            </div>
          </div>

          <DialogFooter className="gap-2">
            <DialogClose asChild>
              <Button type="button" variant="outline" disabled={isSubmitting}>
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <span className="mr-2">⏳</span>
                  {mode === "add" ? "Adding..." : "Saving..."}
                </>
              ) : mode === "add" ? (
                "Add Experience"
              ) : (
                "Save Changes"
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default ExperienceForm;
