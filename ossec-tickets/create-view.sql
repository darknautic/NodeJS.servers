use ossec;

create view tickets_today as
	(
SELECT
	location.name as "location"
	,alert.rule_id
	,signature.level
	,signature.description
	,count(*) as "NoAlerts"
FROM alert,signature,location
WHERE  alert.rule_id = signature.rule_id
	AND location.id = alert.location_id
	AND date(from_unixtime(alert.timestamp)) = date(sysdate())
GROUP BY location.name,alert.rule_id,signature.level,signature.description
	)



select count(*) from tickets_today;

#***  materialized view can be implemented as follows ::  http://www.fromdual.com/mysql-materialized-views

