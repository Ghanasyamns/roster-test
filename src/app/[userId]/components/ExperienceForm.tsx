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
import { EmploymentType, Experience } from "@/data/users";
import { useState } from "react";

interface ExperienceFormProps {
  mode: "add" | "edit";
  experience?: Experience;
  onSubmit: (experience: Experience) => void;
  triggerButton?: React.ReactNode;
}

function ExperienceForm({
  mode,
  experience,
  onSubmit,
  triggerButton,
}: ExperienceFormProps) {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState<Experience>(
    experience ?? {
      id: Date.now().toString(),
      employer_name: "Mr. Beast",
      job_title: "",
      job_type: "Full Time",
      job_summary: "",
      job_duration_start: "",
      job_duration_end: "",
      projects: [],
      no_of_projects: 3,
      subscriber_count: "20M",
    }
  );
  const [errors, setErrors] = useState<
    Partial<Record<keyof Experience, string>>
  >({});

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof Experience, string>> = {};

    if (!formData.job_title.trim()) {
      newErrors.job_title = "Job title is required";
    }
    if (!formData.job_duration_start) {
      newErrors.job_duration_start = "Start date is required";
    }
    if (!formData.job_duration_end) {
      newErrors.job_duration_end = "End date is required";
    }
    if (!formData.job_type) {
      newErrors.job_type = "Employment type is required";
    }
    if (!formData.job_summary.trim()) {
      newErrors.job_summary = "Job summary is required";
    }

    // Date validation
    if (formData.job_duration_start && formData.job_duration_end) {
      const fromDate = new Date(formData.job_duration_start);
      const toDate = new Date(formData.job_duration_end);
      if (fromDate > toDate) {
        newErrors.job_duration_end = "End date must be after start date";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const experienceData: Experience = {
      ...formData,
      ...(experience?.id && { id: experience.id }),
    };

    onSubmit(experienceData);

    // Reset form if adding new experience
    if (mode === "add") {
      setFormData({
        id: Date.now().toString(),
        employer_name: "Mr. Beast",
        job_title: "",
        job_type: "Full Time",
        job_summary: "",
        job_duration_start: "",
        job_duration_end: "",
        projects: [],
        no_of_projects: 3,
        subscriber_count: "20M",
      });
    }

    setErrors({});
    setOpen(false);
  };

  const handleInputChange = (field: keyof Experience, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const defaultTrigger = (
    <Button variant="default">
      {mode === "add" ? "Add Experience" : "Edit Experience"}
    </Button>
  );

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{triggerButton || defaultTrigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>
              {mode === "add" ? "Add Experience" : "Edit Experience"}
            </DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-3">
              <Label htmlFor="job-title">Job title *</Label>
              <Input
                id="job-title"
                name="job_title"
                value={formData.job_title}
                onChange={(e) => handleInputChange("job_title", e.target.value)}
                className={errors.job_title ? "border-red-500" : ""}
              />
              {errors.job_title && (
                <span className="text-sm text-red-500">{errors.job_title}</span>
              )}
            </div>

            <div className="grid gap-3">
              <Label htmlFor="date">Duration of employment *</Label>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <DatePicker
                    label="From"
                    selected={
                      formData.job_duration_start
                        ? new Date(formData.job_duration_start)
                        : undefined
                    }
                    onDateChange={(date) =>
                      handleInputChange(
                        "job_duration_start",
                        date?.toDateString() || ""
                      )
                    }
                  />
                  {errors.job_duration_start && (
                    <span className="text-sm text-red-500">
                      {errors.job_duration_start}
                    </span>
                  )}
                </div>
                <div>
                  <DatePicker
                    label="To"
                    selected={
                      formData.job_duration_end
                        ? new Date(formData.job_duration_end)
                        : undefined
                    }
                    onDateChange={(date) =>
                      handleInputChange(
                        "job_duration_end",
                        date?.toDateString() || ""
                      )
                    }
                  />
                  {errors.job_duration_end && (
                    <span className="text-sm text-red-500">
                      {errors.job_duration_end}
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="grid gap-3">
              <Label htmlFor="job_type">Type of employment *</Label>
              <Select
                value={formData.job_type}
                onValueChange={(value) => handleInputChange("job_type", value)}
              >
                <SelectTrigger
                  className={`w-full ${
                    errors.job_type ? "border-red-500" : ""
                  }`}
                >
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {["Full Time", "Contract"].map((value) => (
                      <SelectItem key={value} value={value}>
                        {value}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              {errors.job_type && (
                <span className="text-sm text-red-500">{errors.job_type}</span>
              )}
            </div>

            <div className="grid gap-3">
              <Label htmlFor="job_summary">Contribution in the role *</Label>
              <Textarea
                id="job_summary"
                name="job_summary"
                rows={4}
                value={formData.job_summary}
                onChange={(e) =>
                  handleInputChange("job_summary", e.target.value)
                }
                className={errors.job_summary ? "border-red-500" : ""}
                placeholder="Describe your key contributions and achievements..."
              />
              {errors.job_summary && (
                <span className="text-sm text-red-500">
                  {errors.job_summary}
                </span>
              )}
            </div>
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit">
              {mode === "add" ? "Add Experience" : "Save Changes"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default ExperienceForm;
