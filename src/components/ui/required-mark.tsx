import React from "react";

type Props = {
  className?: string
}


export default function RequiredMark({ className }: Props) {
    return(
        <span className={`text-red-600 text-md ${className || ""}`}>*</span>
    )
}
