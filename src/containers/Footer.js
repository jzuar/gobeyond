import { Button } from '@mui/material';

function Footer() {
    return(
        <div className='bg_page'>
          <div className=" footer-botton-logo flex justify-center">
            <footer className="footer goBeyond_footer p-10 max-w-5xl  text-base-content">
              <div className="grid my-10 md:grid-cols-2">
                <div className='my-10 py-24'>
                  <Button className="footer-title bg-black text-white font-bold py-2 px-4 rounded">
                    Enlaces de pago
                  </Button>
                  <p>Costo de la tarjeta $49.99</p>

                  <p>0x8Dc782d85a6040870B9CCa1D09b13a9bbE0563B4</p>
                  <img src="/images/qr_usdt.svg" alt="QR USDT" />
                  <br/>
                   <p>1JRXH6NfF1sjDqXJRG3XMKw18yGngvseZa</p>
                  <img src="/images/qr_bitcoin.svg" alt="QR BITCOIN" />
                </div>
                <div>
                   <input
                    label="Foto comprobante de pago"
                    type="file"
                    accept="image/*"
                    onChange={(event) => handleBackPhotoChange(event.target.files[0])}
                    name="backPhoto"
                  />
                </div>
              </div>

            </footer>
          </div>
          <div className=" p-4 flex justify-center bg-neutral text-neutral-content">
              <div className="max-w-5xl ">
                <p>Copyright © 2023 - All right reserved</p>
              </div>
          </div>
        </div>
    )
}

export default Footer
