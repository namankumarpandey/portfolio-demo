import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa6";
export default function Footer() {
  return (
    <footer className="py-10 text-sm bg-[#f9f9f9] text-[#212529] relative">
      <div className="tablet:max-w-[540px] desktop:max-w-[720px] huge:max-w-[960px] w-full px-3 mx-auto">
        <div className="text-center">
          <p>
            © <span>Copyright</span>
            <strong className="px-1 font-bold">MyPortfolio</strong>
            <span>All Rights Reserved</span>
          </p>
        </div>

        <div className="flex justify-center mt-5">
          <a
            href=""
            className="flex items-center justify-center w-10 h-10 border border-[color-mix(in_srgb,var(--foreground),transparent_50%) rounded-full mx-1.25 text-base text-[color-mix(in_srgb,var(--foreground),transparent_50%)] hover:text-[var(--foreground)] hover:border-[var(--foreground)]"
          >
            <FaXTwitter />
          </a>
          <a
            href=""
            className="flex items-center justify-center w-10 h-10 border border-[color-mix(in_srgb,var(--default-color),transparent_50%) rounded-full mx-1.25 text-base text-[color-mix(in_srgb,var(--foreground),transparent_50%)] hover:text-[var(--foreground)] hover:border-[var(--foreground)]"
          >
            <FaFacebook />
          </a>
          <a
            href=""
            className="flex items-center justify-center w-10 h-10 border border-[color-mix(in_srgb,var(--default-color),transparent_50%) rounded-full mx-1.25 text-base text-[color-mix(in_srgb,var(--foreground),transparent_50%)] hover:text-[var(--foreground)] hover:border-[var(--foreground)]"
          >
            <FiInstagram />
          </a>
          <a
            href=""
            className="flex items-center justify-center w-10 h-10 border border-[color-mix(in_srgb,var(--foreground),transparent_50%) rounded-full mx-1.25 text-base text-[color-mix(in_srgb,var(--foreground),transparent_50%)] hover:text-(--foreground) hover:border-(--foreground)"
          >
            <FaLinkedin />
          </a>
        </div>
        <div className="text-center mt-2.5 text-[13px]">
          Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
        </div>
      </div>
    </footer>
  );
}
