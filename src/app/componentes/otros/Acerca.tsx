export const Acerca = () => {
    return (
        <>
        <ul
      className="nav nav-pills nav-fill gap-2 p-1 small bg-primary rounded-5 shadow-sm"
      id="pillNav2"
      role="tablist"
      style={{
        "--bs-nav-link-color": "rgba(255, 255, 255, 0.75)",
        "--bs-nav-link-hover-color": "#fff",
        "--bs-nav-pills-link-active-color": "var(--bs-primary)",
        "--bs-nav-pills-link-active-bg": "var(--bs-white)"
      } as any} 
    >
     
      
      
      <li className="nav-item" role="presentation">
        <button
          className="nav-link rounded-5"
          id="about-tab2"
          data-bs-toggle="tab"
          type="button"
          role="tab"
          aria-selected="false"
        >
          Acerca de
        </button>
      </li>
    </ul>
        </>
    )
}