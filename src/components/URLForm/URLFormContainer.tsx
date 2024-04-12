import { URLForm } from "@/components/URLForm/URLForm"
import { FormStatus, useSubmit } from "@/components/URLForm/useSubmit"
import styles from "@/styles/loader.module.css"

export default function URLFormContainer() {
  const { formStatus, onSubmit } = useSubmit()

  return (
    <>
      {formStatus == FormStatus.base && <URLForm onSubmit={onSubmit} />}
      {formStatus == FormStatus.loading && (
        <div className={styles.loader}>https://...</div>
      )}
    </>
  )
}
