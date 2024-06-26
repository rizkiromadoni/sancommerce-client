import { Billboard as BillboardType } from "@/types";

interface BilloardProps {
  data: BillboardType
}

const Billboard: React.FC<BilloardProps> = ({ data }) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover" style={{ backgroundImage: `url(${data.imageUrl})` }}>
      </div>
    </div>
  )
}

export default Billboard;