import { TimelinePipe } from "../../core/timeline.js";
import { Queryable } from "../queryable.js";

export function ResolveOnData(): TimelinePipe {

    return (instance: Queryable) => {

        instance.on.data(function (this: Queryable, data) {

            this.emit[this.InternalResolveEvent](data);
        });

        return instance;
    };
}

export function RejectOnError(): TimelinePipe {

    return (instance: Queryable) => {

        instance.on.error(function (this: Queryable, err) {

            this.emit[this.InternalRejectEvent](err);
        });

        return instance;
    };
}
