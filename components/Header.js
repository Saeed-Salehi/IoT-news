import Link from "next/link";

const tabs = [
  { title: "News", href: "/" },
  { title: "Saved", href: "/saved" },
];

export default function Header() {
  return (
    <div className="ty-bg-contrast-primary ty-shadow">
      <div className="page-content">
        <div className="ty-flex py-xs-2 py-sm-3 px-2 px-xl-0">
          <div className="ty-flex">
            {tabs.map((item, index) => (
              <Link href={item.href} key={index}>
                <a className="fs-24 fw-700 px-4">{item.title}</a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
