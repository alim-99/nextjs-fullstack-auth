"use strict";
'use client';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SignupPage;
const react_1 = __importDefault(require("react"));
const link_1 = __importDefault(require("next/link"));
function SignupPage() {
    const [user, setUser] = react_1.default.useState({
        email: "",
        password: "",
        username: "",
    });
    const onSignup = () => __awaiter(this, void 0, void 0, function* () {
    });
    return (<div className="flex flex-col min-h-screen items-center justify-center py-2">
      <h1 className="text-3xl mb-7">Signup</h1>
      <hr />
      <input className="text-blue-500 p-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:border-gray-600" id="username" type="text" value={user.username} placeholder="username" onChange={(e) => setUser(Object.assign(Object.assign({}, user), { username: e.target.value }))}/>
      <input className="text-blue-500 p-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:border-gray-600" id="email" type="emial" value={user.email} placeholder="email" onChange={(e) => setUser(Object.assign(Object.assign({}, user), { email: e.target.value }))}/>
      <input className="text-blue-500 p-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:border-gray-600" id="password" type="password" value={user.password} placeholder="password" onChange={(e) => setUser(Object.assign(Object.assign({}, user), { password: e.target.value }))}/>
      <button onClick={onSignup} className="p-2 mt-4 border border-gray-300 rounded-lg mb-4 focus:outline-none 
      focus:border-gray-600 hover:border-gray-700">
      Signup here
      </button>
      <link_1.default className="hover:text-[#dddd]" href="/login">Visit Login Page</link_1.default>
    </div>);
}
