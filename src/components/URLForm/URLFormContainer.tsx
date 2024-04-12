import Loader from "@/components/Loader"
import { URLForm } from "@/components/URLForm/URLForm"
import { FormStatus, useSubmit } from "@/components/URLForm/useSubmit"

export default function URLFormContainer() {
  const { formStatus, onSubmit } = useSubmit()

  return (
    <>
      {formStatus == FormStatus.base && <URLForm onSubmit={onSubmit} />}
      {formStatus == FormStatus.loading && <Loader />}
    </>
  )
}
