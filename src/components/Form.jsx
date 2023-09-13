import { useDispatch, useSelector } from "react-redux";
// import { addUser } from "../store/index";
import { useFetchUsersQuery, useAddUserMutation } from "../store/index";

function Form() {
    const dispatch = useDispatch();
    const { data, error, isLoading } = useFetchUsersQuery(1);
    const [addUser, results] = useAddUserMutation();

    const listUsers = useSelector((state) => {
        // console.log(state);
        return state.users;
    });

    const handleAddUser = (event) => {
        event.preventDefault();

        addUser({
            username: event.target.form[0].value,
            password: event.target.form[1].value,
            fullName: event.target.form[2].value,
            email: event.target.form[3].value,
        });
    };

    return (
        <form className="w-2/4 " action="">
            <div className="flex flex-col mb-6">
                <label
                    className="font-serif mb-2 text-primary-5 text-sm"
                    htmlFor=""
                >
                    USERNAME
                </label>
                <input className="border-b-2" type="text"></input>
            </div>

            <div className="flex flex-col mb-6">
                <label
                    className="font-serif mb-2 text-primary-5 text-sm"
                    htmlFor=""
                >
                    PASSWORD
                </label>
                <input className="border-b-2" type="text"></input>
            </div>

            <div className="flex flex-col mb-6">
                <label
                    className="font-serif mb-2 text-primary-5 text-sm"
                    htmlFor=""
                >
                    FULL NAME
                </label>
                <input className="border-b-2" type="text"></input>
            </div>

            <div className="flex flex-col mb-32">
                <label
                    className="font-serif mb-2 text-primary-5 text-sm"
                    htmlFor=""
                >
                    EMAIL
                </label>
                <input className="border-b-2" type="text"></input>
            </div>

            <div className="flex flex-col">
                <button
                    className="bg-secondary-1 text-white rounded-[8px] border-2 h-12 px-16 mb-6"
                    onClick={(e) => handleAddUser(e)}
                >
                    Get Started
                </button>

                <div className="flex flex-row justify-center text-center">
                    <p className="font-light pr-1">Already have an account?</p>
                    <p>Sign in</p>
                </div>
            </div>
        </form>
    );
}

export default Form;
