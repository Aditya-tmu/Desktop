function App() {
  const handlePrint = () => {
    window.print();
  }
  return (
    <main className="p-5 lg:max-w-xl lg:mx-auto bg-white">
      {/*Header*/}
      <header className="flex justify-center items-center mb-5">
        <div>
          <h2>SwiftBill</h2>
        </div>

        <div>
          <ul className="flex item-center justify-between flex-wrap">
            <li><button onClick={handlePrint} className="btn btn-print">Print</button></li>
            <li><button className="btn btn-download">Download</button></li>
            <li><button className="btn btn-send">Send</button></li>
          </ul>
        </div>
      </header>


      {/*End of Header*/}

      {/*Your Company Details*/}
      <section className="flex flex-col items-end justify-end">
        <h2>Maa Vindywashini Hardware</h2>
        <p>Your Company Address</p>
      </section>
      {/*End of Your Company Details*/}

      {/*Bill To*/}
      <section>
        <h3>Bill To</h3>
        <p>Client's Name</p>
        <p>Client's Address</p>
      </section>
      {/*End of Bill To*/}

      {/* Invoice number & Dates */}
      <article>
        <li>Invoice Number: </li>
        <li>Invoice Date: </li>
        <li>Due Date: </li>

      </article>
      {/* End of Invoice number & Dates */}
      
      {/*Item Table*/}  
      <section>
        {/* Textarea */}
        <p>Notes to the Client...</p>
      </section>

      {/*End of Item Table*/}

      {/*Footer*/}
      <footer>
        <li>Company Name</li>
        <li>Company Address</li>
        <li>Company Phone</li>
        <li>Company Email</li>
        <li>Company GSTIN</li>
        <li>Company Bank</li>
        <li>Account Number</li>
        <li>Company Website</li>
      </footer>

      {/*End of Footer*/}
    </main>
  );
}

export default App;
