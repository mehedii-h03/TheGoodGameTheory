import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Avatar,
    Tooltip,
} from "@material-tailwind/react";

const BeerCard = ({ beer }) => {
    const { name, description, image_url } = beer;

    return (
        <Card className="max-w-[24rem] overflow-hidden">
            <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none"
            >
                <img
                    className="object-contain w-72 h-56 mx-auto mt-5"
                    src={image_url}
                    alt={name}
                />
            </CardHeader>
            <CardBody>
                {name.length > 20 ? (
                    <Tooltip content={name}>
                        <Typography variant="h4" color="blue-gray">
                            {`${name.substring(0, 20)}...`}
                        </Typography>
                    </Tooltip>
                ) : (
                    <Typography variant="h4" color="blue-gray">
                        {name}
                    </Typography>
                )}
                {description.length > 120 ? (
                    <Tooltip content={description} placement="top-end">
                        <Typography variant="lead" color="gray" className="mt-3 font-normal">
                            {description.substring(0, 100)}...
                        </Typography>
                    </Tooltip>
                ) : (
                    <Typography variant="lead" color="gray" className="mt-3 font-normal">
                        {description}
                    </Typography>
                )}
            </CardBody>
            <CardFooter className="flex items-center justify-between mt-auto">
                <div className="flex items-center -space-x-3">
                    <Tooltip content="Natali Craig">
                        <Avatar
                            size="sm"
                            variant="circular"
                            alt="natali craig"
                            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                            className="border-2 border-white hover:z-10"
                        />
                    </Tooltip>
                    <Tooltip content="Tania Andrew">
                        <Avatar
                            size="sm"
                            variant="circular"
                            alt="tania andrew"
                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                            className="border-2 border-white hover:z-10"
                        />
                    </Tooltip>
                </div>
                <a href="#" className="font-normal">
                    Show details
                </a>
            </CardFooter>
        </Card>
    );
};

export default BeerCard;
