const WhoIsThisFor = () => {
  return (
    <section className="py-16 bg-bef0fb">
      <div className="container mx-auto px-4 max-w-5xl">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-primary">
          Who Is REACH Pixune For?
        </h2>

        {/* Automotive OEMs */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-primary">
            Fashion brands and labels
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Fashion brands can create their own signature print language instead of relying on generic stock designs from mills. Design teams can build distinctive florals, geometric prints, and conversational patterns that align with the brand story of each collection.
            </li>
          </ul>
        </div>

        {/* Tier-1 suppliers */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-primary">
            Design and product development teams
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Designers can explore multiple ideas quickly, test repeat patterns, and present clear visual concepts to merchandising teams. Product developers receive organized, specification-ready artwork that reduces miscommunication with printers and simplifies the production process.
            </li>
          </ul>
        </div>

        {/* Aftermarket brands */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-primary">
            Sourcing, merchandising, and sales teams
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Merchandising and sourcing teams benefit from faster design adjustments and quick recoloring of prints. Sales teams can present collections more confidently when prints are clearly visualized on garments used in line sheets and presentations.
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default WhoIsThisFor;
