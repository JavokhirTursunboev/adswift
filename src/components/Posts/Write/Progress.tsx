import React from "react";
import {CircularProgress} from "@nextui-org/react";
interface ProgressProps {
  uploadProgress: number;
}
export default function Progress({uploadProgress}:ProgressProps) {
  
 
  return (
    <CircularProgress
      aria-label="Loading..."
      size="md"
      value={uploadProgress}
      color="warning"
      showValueLabel={true}
    />
  );
}
