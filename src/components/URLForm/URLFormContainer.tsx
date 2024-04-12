import { URLForm } from "@/components/URLForm/URLForm"
import useSubmit from "@/components/URLForm/useSubmit"

export default function URLFormContainer() {
  const { formStatus, onSubmit } = useSubmit()

  return <URLForm onSubmit={onSubmit} />
}
