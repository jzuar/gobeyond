import { Button } from '@mui/material';

function Footer() {
    return(
        <div className='bg_page footer-botton-logos'>
          <picture className="header-logo">
				        <img src="/images/footer.svg" alt="Logo" />
          </picture>
          <div className=" p-4 flex justify-center bg-neutral text-neutral-content">
              <div className="max-w-5xl ">
                <p>Copyright © 2023 - All right reserved</p>
              </div>
          </div>
        </div>
    )
}

export default Footer
