import React, { useState } from 'react'

function Form() {
  const [form, setForm] = useState({ name: '', number: '', code: '', bname: '', bcity: '', bbname: '', relation: '' });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: [e.target.value] })
  }

  const [isSubmit, setIsSubmit] = useState(false);

  const [date,setDate] = useState(null)

  const handleSumbit = (e) => {
    e.preventDefault();
    const newDate = new Date();
    setDate(newDate);

    setIsSubmit(true);
    const inputs = document.getElementsByTagName('input');

    for (let index = 0; index < inputs.length; index++) {
      const element = inputs[index];
      element.classList.add('bg-green-100');
    }
  }
  return (
    <div className='sm:mr-36 sm:m-8 m-4 border-b-2 border-t-2 border-t-slate-200 sm:border-t-0 pt-8 sm:pt-0'>
      <p className='text-xl font-medium text-start'>Update Bank Deatils</p>
      <p className=''>lorem lorem lore mset oif instrcutions while filling the form and also consider your first name and
        las name properly. As this is even task but you have to dolow your instrcutions . you should read everything. </p>
      <form onSubmit={handleSumbit} className='border border-slate-300 sm:p-6 p-2 sm:my-4 my-2'>
        <div className='m-2 sm:flex sm:justify-between'>
          <label htmlFor='name'>ACCOUNT HOLDER NAME</
          label>
          <input required onChange={handleChange} value={form.name} className='border border-slate-200 p-2 sm:w-[520px] w-[100%]' type='text' name='name' id='name' placeholder='Account Holder Name' />
        </div>
        <div className='m-2 sm:flex sm:justify-between'>
          <label htmlFor='number'>ACCOUNT NUMBER</label>
          <input required onChange={handleChange} value={form.number} className='border border-slate-200 p-2 sm:w-[520px] w-[100%]' type='number' name='number' id='number' placeholder='Account Number' />
        </div>
        <div className='m-2 sm:flex sm:justify-between'>
          <label htmlFor='code'>IFSC CODE</label>
          <input required onChange={handleChange} value={form.code} className='border border-slate-200 p-2 sm:w-[520px] w-[100%]' type='text' name='code' id='code' placeholder='IFSC Code' />
        </div>
        <div className='m-2 sm:flex sm:justify-between'>
          <label htmlFor='bname'>BANK NAME</label>
          <input required onChange={handleChange} value={form.bname} className='border border-slate-200 p-2 sm:w-[520px] w-[100%]' type='text' name='bname' id='bname' placeholder='Bank Name' />
        </div>
        <div className='m-2 sm:flex sm:justify-between'>
          <label htmlFor='bcity'>BANK CITY</label>
          <input required onChange={handleChange} value={form.bcity} className='border border-slate-200 p-2 sm:w-[520px] w-[100%]' type='text' name='bcity' id='bcity' placeholder='Bank City' />
        </div>
        <div className='m-2 sm:flex sm:justify-between'>
          <label htmlFor='bbname'>BRANCH NAME</label>
          <input required onChange={handleChange} value={form.bbname} className='border border-slate-200 p-2 sm:w-[520px] w-[100%]' type='text' name='bbname' id='bbname' placeholder='Branch Name' />
        </div>
        <div className='m-2 sm:flex sm:justify-between'>
          <label htmlFor='relation'>RELATION WITH ACCOUNT HOLDER</label>
          <input required onChange={handleChange} value={form.relation} className='border border-slate-200 p-2 sm:w-[520px] w-[100%]' type='text' name='relation' id='relation' placeholder='Relation With Account Holder' />
        </div>
        <div className='m-2 sm:flex sm:justify-between'>
          <label htmlFor='consent'>CONSENT</label>
          <div className={`flex sm:justify-normal border border-stone-200 sm:w-[520px] w-[100%] p-2 ${isSubmit ? 'bg-green-100' : ''} `}>
            <input disabled={isSubmit} required className='m-2 sm:border sm:border-slate-200 w-12 h-12 rounded-sm' type='checkbox' name='consent' id='consent' />
            <div>
              <p>lorem lorem lore mset oif instructions while filling the form and also consider your first name and las name properly. As this is even task but you</p>
            {
               isSubmit ? <p className='font-bold'>Filled on {date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} </p> : ''
            }
            </div>        
          </div>
        </div>
        <div className='m-2 flex justify-between'>
          <label htmlFor='relation'></label>
          <button type='submit' className={`bg-green-600 px-4 py-2 rounded-sm text-white ${isSubmit ? 'hidden' : ''} `}>Save</button>        </div>
      </form>
      <p className='text-center mb-4 text-sm'>
        THE ABOVE DEATILS ARE FINAL AND WILL BE USED FOR PAYMENT.IF ANY OFTHE DEATILS ARE WRONG.PLEASE CONTACT YOUR MANAGER IMMEDIATELY ALSO EMAIL THE SAME TO ACCOUNT@EXAMBAZAR.COM!
      </p>
    </div>
  )
}

export default Form