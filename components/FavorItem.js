import moment from "moment";
import Image from "next/image";
import classes from "./FavorItem.module.css";

export default function FavorItem(props) {
  const { FItem } = props;
  return (
    <div className="p-3 ty-flex ty-flex-wrap">
      <div className="ty-col-6">
        <div className={classes.ratio_}>
          <div className={classes.ratio_env}>
            <Image
              src={FItem.image}
              alt={FItem.title}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
      <div className="ty-flex flex-coloumn ty-col-18 pl-3">
        <h3>{FItem.title}</h3>
        <p>{FItem.summary}</p>
        <div className="mt-auto">
          <p className="ty-color-primary">{FItem.author.name}</p>
          <p className="ty-color-gray">{moment(FItem.date_published).format("DD/MM/YYYY")}</p>
        </div>
      </div>
    </div>
  );
}
