import { CardProps } from "../@types/Types";

export const Card = ({ children, bg = "bg-gray-100" }: CardProps) => {
    return <div className={`${bg} p-6 rounded-lg shadow-md`}>{children}</div>;
};
