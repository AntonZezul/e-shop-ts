import { useRouter } from 'next/router'

// TODO with ApartmentSwitcher
const usePage = () => {
  const router = useRouter()
  const routerBack = () => {
    router.back()
  }
  return {
    routerBack,
  }
}

export default usePage
