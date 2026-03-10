import {neon} from "@neondatabase/serverless"

const sql = neon("postgresql://neondb_owner:npg_gUdj74VGMqFL@ep-lucky-pond-aho38aze-pooler.c-3.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require  ");

export default sql;
