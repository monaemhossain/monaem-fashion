   
import { Footer } from 'flowbite-react';

const SiteFooter = () => {
  const toggleLogo = false;
  return (
    <Footer container className='rounded-none border-none max-w-screen-xl mx-auto shadow-none dark:bg-darkTheme'>
      <div className="w-full bg-transparent">
        <div className="grid justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className='grid items-center'>
            <Footer.Brand
              alt="Monaem Logo"
              href="monaem1.web.app"
              src={
                toggleLogo ? "/monaem-light.svg" : "/monaem-dark.svg"
              }
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="about" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">
                  Monaem
                </Footer.Link>
                <Footer.Link href="#">
                  Facebook
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">
                  Github
                </Footer.Link>
                <Footer.Link href="#">
                  Discord
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">
                  Privacy Policy
                </Footer.Link>
                <Footer.Link href="#">
                  Terms & Conditions
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between border-none">
          <Footer.Copyright
            by="Monaem"
            href="#"
            year={2023}
          />
          
        </div>
      </div>
    </Footer>
    );
}

export default SiteFooter;