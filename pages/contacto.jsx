import Layout from "../components/Layout";

export default function contacto() {
  return ( 
    <Layout
      title="PH | Contacto "
      description="pagina con telefonos, mails  y redes sociales"
      >
      <h1>contacto</h1>
      
      
      <form class="flex w-full max-w-sm space-x-3">
      <div class="w-full max-w-2xl px-5 py-10 m-auto mt-10 bg-white rounded-lg shadow dark:bg-gray-800">
        <div class="mb-6 text-3xl font-light text-center text-gray-800 dark:text-white">
            Contact us !
        </div>
        <div class="grid max-w-xl grid-cols-2 gap-4 m-auto">
            <div class="col-span-2 lg:col-span-1">
                <div class=" relative ">
                    <input type="text" id="contact-form-name" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Name"/>
                    </div>
                </div>
                <div class="col-span-2 lg:col-span-1">
                    <div class=" relative ">
                        <input type="text" id="contact-form-email" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="email"/>
                        </div>
                    </div>
                    <div class="col-span-2">
                        <label class="text-gray-700" for="name">
                            <textarea class="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" id="comment" placeholder="Enter your comment" name="comment" rows="5" cols="40">
                            </textarea>
                        </label>
                    </div>
                    <div class="col-span-2 text-right">
                        <button type="submit" class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                           Enviar
                        </button>
                    </div>
                </div>
            </div>
        </form>
        
      <p>
        Datos de contacto:
        Nombres con puestos/cargos : Hernan Alves Bandarra Socio Gerente // Paula Deluca Socio Gerente 
        Teléfonos / whatsapp / telegram // 156479-0325 
        Redes sociales:
   
        Instagram / propiedadhorizontalconsultora
        Otras:
        Emails propiedadhorizontalconsultora@gmail.com

      </p>
    </Layout>
  )
}
