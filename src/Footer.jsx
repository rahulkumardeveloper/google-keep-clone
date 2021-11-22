import React from "react";


const Footer = () => {
  let year=new Date().getFullYear();

    return (
        <>
            <div className="footer">
                <footer>
                 <p>All Right Reserve ©<a href="https://github.com/rahulkumardeveloper"target="next">Rahul developer</a> {year} </p>
                </footer>

            </div>

        </>
    )
}


export default Footer;