import React, { useState } from "react";
import Script from 'next/script';


function navbar() {
  return (
  <div id="navbar" >
    {
<div class="relative z-20 border-b bg-slate-600">
<div class="px-6 md:px-12 lg:container lg:mx-auto lg:px-1 lg:py-4">
  <div class="flex items-center justify-between">
    <div class="relative z-20">
      <a href="#">
        <img src="/imgs/watonomous.png" alt="logo-tailus" class="w-64"/>
      </a>
    </div>

    <div class="flex items-center justify-end">
      <input type="checkbox" name="hamburger" id="hamburger" class="peer" hidden/>
      <label for="hamburger" class="peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden">
        <div aria-hidden="true" class="m-auto h-0.5 w-6 rounded bg-sky-900 transition duration-300"></div>
        <div aria-hidden="true" class="m-auto mt-2 h-0.5 w-6 rounded bg-sky-900 transition duration-300"></div>
      </label>

      <div class="peer-checked:translate-x-0 fixed inset-0 w-[calc(100%)] peer-checked:bg-black translate-x-[-100%] bg-sl border-r shadow-xl transition duration-300 lg:border-r-0 lg:w-auto lg:static lg:shadow-none lg:translate-x-0">
        <div class="flex flex-col h-full justify-between lg:items-center lg:flex-row place-items-center">
          <ul class="px-2 pt-32 text-gray-700 space-y-8 md:px-1 lg:space-y-0 lg:flex lg:space-x-4 lg:pt-0">
            <li>
              <a href="#" class="group">
                <span class="relative text-white">About</span>
              </a>
            </li>
            <li>
              <a href="#" class="group">
                <span class="relative text-white">Impact</span>
              </a>
            </li>
            <li>
              <a href="#" class="group">
                <span class="relative text-white ">Blog</span>
              </a>
            </li>
            <li>
              <a href="#" class="grou">
                <span class="relative text-white">Open Roles</span>
              </a>
            </li>
            <li>
              <a href="#" class="group">
                <span class="relative text-white">Sponsor</span>
              </a>
            </li>
            <li>
              <a href="#" class="group">
                <span class="relative text-white"><i class="fa-brands fa-instagram fa-xl"></i></span>
              </a>
            </li>
            <li>
              <a href="#" class="group">
                <span class="relative text-white"><i class="fa-brands fa-twitter fa-xl"></i></span>
              </a>
            </li>
            <li>
              <a href="#" class="group">
                <span class="relative text-white"><i class="fa-brands fa-linkedin fa-xl"></i></span>
              </a>
            </li>
            <li>
              <a href="#" class="group">
                <span class="relative text-white" onClick={() => setModalActive(!modalActive)}>Connect</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
}
  </div>
 
  );
 
}



export default navbar;
