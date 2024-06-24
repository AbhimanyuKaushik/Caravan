'use client'
import '../globals.css'
import Image from 'next/image'
import { assets } from '../../../public/admin_assets/assets'
import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

function Page() {
  const url = 'http://localhost:4000';
  const [image, setImage] = useState<File | null>(null); // Adjusted state type
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad"
  });

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }));
  }

  const onImageChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setImage(event.target.files[0]);
    }
  }

  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", data.price); // Send as string
    formData.append("category", data.category);
    if (image) {
      formData.append("image", image);
    }

    try {
      const response = await axios.post(`${url}/api/food/add`, formData);
      if (response.data.success) {
        setData({
          name: "",
          description: "",
          price: "",
          category: "Salad"
        });
        setImage(null);
        toast.success(response.data.message)
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.error('An error occurred while submitting the form', error);
    }
  }

  return (
    <div className='add w-[70%] ml-[max(5vw,25px)] mt-[50px] text-[#6d6d6d] text-[16px]'>
      <form onSubmit={onSubmitHandler} className='gap-[20px] multi'>
        <div className='add-img-upload multi w-[120px]'>
          <p>Upload Image</p>
          <label htmlFor="image">
            <Image className='w-[120px]' src={image ? URL.createObjectURL(image) : assets.upload_area} width={100} height={100} alt='Upload' />
          </label>
          <input onChange={onImageChangeHandler} type='file' id='image' hidden required />
        </div>
        <div className='add product-name multi w-[max(40%,280px)]'>
          <p>Product Name</p>
          <input onChange={onChangeHandler} value={data.name} className='p-[10px] border' type='text' name='name' placeholder='Type Here' required />
        </div>
        <div className='add-product-desc multi w-[max(40%,280px)]'>
          <p>Product Description</p>
          <textarea onChange={onChangeHandler} value={data.description} className='p-[10px] border' name="description" rows={6} placeholder='Write content here' required></textarea>
        </div>
        <div className='add-category-price flex gap-[30px]'>
          <div className='add-category multi'>
            <p>Product Category</p>
            <select onChange={onChangeHandler} value={data.category} name="category" className='border max-w-[120px] p-[10px]'>
              <option value='Salad'>Salad</option>
              <option value='Rolls'>Rolls</option>
              <option value='Dessert'>Dessert</option>
              <option value='Sandwich'>Sandwich</option>
              <option value='Cake'>Cake</option>
              <option value='Pure Veg'>Pure Veg</option>
              <option value='Pasta'>Pasta</option>
              <option value='Noodles'>Noodles</option>
            </select>
          </div>
          <div className="add-price multi">
            <p>Product Price</p>
            <input onChange={onChangeHandler} value={data.price} className='border max-w-[120px] p-[10px]' type='number' name='price' placeholder='$20' required />
          </div>
        </div>
        <button type='submit' className='add-btn max-w-[120px] border-none p-[10px] bg-black text-white cursor-pointer'>ADD</button>
      </form>
    </div>
  )
}

export default Page;
