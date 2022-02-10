import Image from "next/image"
import PHPIconFile from "../public/files_logos/file_type_php3.svg"
import PythonIconFile from "../public/files_logos/file_type_python.svg"
import ReactIconFile from "../public/files_logos/file_type_reactjs.svg"
import NextIconFile from "../public/files_logos/nextjs_logo.svg"
import PytorchIconFile from "../public/files_logos/pytorch_logo.svg"


export const PythonIcon = () => (
    <Image src={PythonIconFile} alt="Python icon" width="20px" height="20px" />
)

export const PytorchIcon = () => (
    <Image src={PytorchIconFile} alt="PyTorch icon" width="16.52px" height="20px" />
)

export const ReactIcon = () => (
    <Image src={ReactIconFile} alt="React.js icon" width="20px" height="20px" />
)

export const NextIcon = () => (
    <Image src={NextIconFile} alt="Next.js icon" width="20px" height="20px" />
)

export const PHPIcon = () => (
    <Image src={PHPIconFile} alt="PHP icon" width="20px" height="20px" />
)
