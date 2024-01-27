export { auth as middleware } from "@/auth"; //uygulamanin her yerinden ulasilabilir

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
  }
  //bu klasorler haric uygulamanin her yerinden calismasi icin