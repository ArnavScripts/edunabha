import { StudentTable } from "@/components/students/student-table";
import { Button } from "@/components/ui/button";
import { students } from "@/lib/data";
import { Download } from "lucide-react";

export default function StudentsPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
            <h1 className="text-3xl font-bold font-headline">Students</h1>
            <p className="text-muted-foreground">
                Track and manage student progress and performance.
            </p>
        </div>
        <Button>
            <Download className="mr-2 h-4 w-4" />
            Export CSV
        </Button>
      </div>
      <StudentTable students={students} />
    </div>
  );
}
