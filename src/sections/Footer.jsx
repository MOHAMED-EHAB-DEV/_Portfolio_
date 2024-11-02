const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <a className="social-icon" href="https://github.com/MOHAMED-EHAB-DEV">
          <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
        </a>
        <a className="social-icon" href="https://x.com/__M__O__H__">
          <img src="/assets/twitter.svg" alt="twitter" className="w-1/2 h-1/2" />
        </a>
        <a className="social-icon" href="https://hashnode.com/@Programming-School">
          <img src="/assets/hashnode.png" alt="hashnode" className="w-1/2 h-1/2" />
        </a>
      </div>

      <p className="text-white-500">© 2024 Mohammed Ehab. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
