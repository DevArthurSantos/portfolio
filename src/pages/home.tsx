import usePersistedState from "../infra/utils/Hooks/userPersistedState"
import { MdOutlineLaptopChromebook } from "react-icons/md";
import { IoDocumentAttachOutline } from "react-icons/io5";

type ThemeProps = {
  title: string
  classList: string[]
  icon: string
}
const light = {
  title: "Light",
  classList: [" text-gray-900", " bg-white"],
  icon: "☀️"
}
const dark = {
  title: "dark",
  classList: [" text-gray-100", " bg-gray-900"],
  icon: "🌙"
}

function Home() {

  const [theme, setTheme] = usePersistedState<ThemeProps>("theme", dark)

  function hendleThemer() {
    setTheme(theme.title === light.title ? dark : light)
  }

  return (
    <>
      <main className={"font-sans antialiased leading-normal tracking-wider bg-cover bg-center bg-home" + theme.classList[0]}>

        <div className="max-w-4xl flex items-center h-screen flex-wrap mx-auto">

          {/* <!--Main Col--> */}
          <div id="profile"
            className={"w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl opacity-95 mx-6 lg:mx-0" + theme.classList[1]}>

            <div className="p-4 md:p-10 text-center lg:text-left">
              {/* <!-- Image for mobile view--> */}
              <div className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center bg-myself" />

              <h1 className="text-3xl font-bold pt-8 lg:pt-0">Arthur Santos</h1>
              <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
              <p className="pt-4 text-base font-semibold flex items-center justify-center lg:justify-start"><svg
                className="h-4 fill-current text-green-700 pr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path
                  d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
              </svg>Desenvolvedor Web</p>
              <p
                className="pt-4 text-base lg:text-sm flex font-semibold items-center justify-center lg:justify-start">
                <svg className="h-4 fill-current text-green-700 pr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path
                    d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z" />
                </svg> Resido em Vitoria-PE, Brasil.
              </p>
              <p className="pt-4 text-sm font-semibold">
                Com cerca de 6 anos de experiência, destaco-me pela por enfrentar desafios e pela busca incessante por soluções inovadoras.
                Minhas habilidades foram aprimoradas em uma variedade de projetos, resultando em um desenvolvimento pessoal e técnico.
                Resiliente, capacitado e paciente, mantenho um constante apetite por aprendizado.
                Explore mais sobre minha trajetória e projetos no
                <a href="https://www.linkedin.com/in/devarthursantos/" target="_blank"><span className="font-bold mr-1 ml-1 text-green-700">Linkedin</span></a>
                ou
                <a href="https://github.com/DevArthurSantos" target="_blank"><span className="font-bold ml-1 text-green-700">GitHub</span></a>.
              </p>
              <div className="mx-auto lg:mx-0 w-4/5 pt-4 border-b-2 border-green-500 opacity-25"></div>

              <div className="pt-4 pb-8 flex justify-center gap-4 lg:justify-around flex-wrap">

                <a tabIndex={0} href="assets/Arthur Santos curriculo.pdf" target="_blank"
                  download="Arthur Santos CV min.pdf" className="flex justify-center">
                  <button
                    className="bg-green-700 hover:bg-green-900 text-white font-semibold py-2 px-4 rounded-full flex items-center justify-center">
                    <div className="mr-2">
                      <IoDocumentAttachOutline />
                    </div>
                    CURRÍCULO
                  </button>
                </a>

                <a tabIndex={0} href="https://arthur.aurionsolutions.tech/" target="_blank" className="flex justify-center">
                  <button
                    className="bg-green-700 hover:bg-green-900 text-white font-semibold py-2 px-4 rounded-full flex items-center justify-center">
                    <div className="mr-2">
                      <MdOutlineLaptopChromebook />
                    </div>
                    PORTFOLIO
                  </button>
                </a>
              </div>

              <div className="pt-4 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-around">
                <a tabIndex={0} className="link" href="https://www.facebook.com/arthur.santos70/" target="_blank"
                  data-tippy-content="@Facebook"><svg
                    className="h-6 fill-current text-gray-600 hover:text-green-700" role="img" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <title>Facebook</title>
                    <path
                      d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg></a>
                <a tabIndex={0} className="link" href="https://www.linkedin.com/in/devarthursantos/" target="_blank"
                  data-tippy-content="@Linkedin" >
                  <svg
                    className="h-6 fill-current text-gray-600 hover:text-green-700" role="img" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <title>Linkedin</title>

                    <path
                      d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg></a>
                <a tabIndex={0} className="link"
                  href="ttps://api.whatsapp.com/send?phone=5581994920769&text=Ol%C3%A1%20Arthur,%20vi%20seu%20portf%C3%B3lio%20e%20resolvi%20entrar%20em%20contato%20com%20voc%C3%AA!"
                  target="_blank" data-tippy-content="@WhatsApp">
                  <svg
                    className="h-6 fill-current text-gray-600 hover:text-green-700" role="img" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <title>WhatsApp</title>

                    <path
                      d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg></a>
                <a tabIndex={0} className="link" href="https://github.com/DevArthurSantos" target="_blank"
                  data-tippy-content="@Github"><svg
                    className="h-6 fill-current text-gray-600 hover:text-green-700" role="img" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <title>GitHub</title>
                    <path
                      d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg></a>

                {/* <a tabIndex={0} className="link" href="https://www.instagram.com/dev.arthurs/" target="_blank"
                  data-tippy-content="@Instagram"><svg
                    className="h-6 fill-current text-gray-600 hover:text-green-700" role="img" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <title>Instagram</title>
                    <path
                      d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg></a> */}

              </div>

            </div>

          </div>

          {/* <!--Img Col--> */}
          <div className="ml-[-25px] z-10">
            <img src="assets/myself.webp" alt="foto de de perfil do Arthur Santos"
              className="rounded-none lg:rounded-lg shadow-2x1 hidden lg:block h-[35rem]" />
          </div>

          {/* <!-- Pin to top right corner --> */}
          <div className="absolute top-0 right-0 h-12 w-18 lg:p-4">
            <button onClick={hendleThemer} tabIndex={0} className="js-change-theme focus:outline-none">☀️</button>
          </div>
        </div>
      </main>
    </>
  )
}

export default Home;