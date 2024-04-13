import Loader from "@/components/Loader"
import ShortURLDisplay from "@/components/ShortURLDisplay"
import { URLForm } from "@/components/URLForm/URLForm"
import { FormStatus, useSubmit } from "@/components/URLForm/useSubmit"

export default function URLFormContainer() {
  const { formStatus, shortURL, onSubmit } = useSubmit()

  switch (formStatus) {
    case FormStatus.base:
      return <URLForm onSubmit={onSubmit} />

    case FormStatus.loading:
      return <Loader />

    case FormStatus.submitted:
      return <ShortURLDisplay url={shortURL!} />
  }
}
